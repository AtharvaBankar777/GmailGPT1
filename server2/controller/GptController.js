// import openai from "../GPT/gpt.js";
import OpenAI from "openai";
import axios from "axios";

const GetGptData = async (req, res) => {
  try {
    const { subject } = req.body;
    console.log("Subject:", subject);

    // Generate response using GPT
    const prompt = `Subject: ${subject}\nGenerate a response for the email body.`;
    // const response = await openai.chat(prompt);
    const response = "hello";

    return res
      .status(200)
      .json({ message: "Generated response", data: response });
  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { GetGptData };
