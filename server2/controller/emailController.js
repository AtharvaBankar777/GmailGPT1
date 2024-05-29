import Email from "../model/email.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    // user: "astayami95292@gmail.com",
    // pass: "ewjn kjfi vjyo xhvp",
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMailController = async (req, res) => {
  try {
    const { from, to, subject, text, date, image, name1, starred, type } =
      req.body;

    const mailOptions = {
      from,
      to,
      subject,
      text,
      date,
      image,
      name1,
      starred,
      type,
    };

    const emailData = await transporter.sendMail(mailOptions);

    if (emailData) {
      const email = await new Email({
        from,
        to,
        subject,
        text,
        date,
        image,
        name1,
        starred,
        type,
      });
      email.save();

      return res.status(200).json("email saved successfully");
    }
    return resizeBy.status(500).message({
      status: false,
      message: "failed in sending email",
    });
  } catch (error) {
    return console.log(error.message);
  }
};
export { sendMailController };

export const getEmails = async (request, response) => {
  try {
    let emails;

    if (request.params.type === "starred") {
      emails = await Email.find({ starred: true, bin: false });
    } else if (request.params.type === "bin") {
      emails = await Email.find({ bin: true });
    } else if (request.params.type === "allmail") {
      emails = await Email.find({});
    } else if (request.params.type === "inbox") {
      emails = [];
    } else if (request.params.type === "sent") {
      emails = await Email.find({ type: request.params.type });
    } else {
      emails = await Email.find({ type: request.params.type });
    }

    return response.status(200).json(emails);
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const moveEmailsToBin = async (request, response) => {
  try {
    await Email.updateMany(
      { _id: { $in: request.body } },
      { $set: { bin: true, starred: false, type: "" } }
    );
    return response.status(200).json("email deleted succefully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};
export const toggleStarredEmail = async (request, response) => {
  try {
    await Email.updateOne(
      { _id: request.body.id },
      { $set: { starred: request.body.value } }
    );
    response.status(201).json("Value is updated");
  } catch (error) {
    response.status(500).json(error.message);
  }
};

export const deleteEmails = async (request, response) => {
  try {
    await Email.deleteMany({ _id: { $in: request.body } });
    response.status(200).json("emails deleted successfully");
  } catch (error) {
    response.status(500).json(error.message);
  }
};
