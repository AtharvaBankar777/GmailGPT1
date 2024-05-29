import mongoose from "mongoose";
// import { config } from "dotenv";

// config();

const connection = async() => {
  // const DB_URL = process.env.DB_URLS
  try {
    const con = await mongoose.connect(
      // DB_URL
      'mongodb+srv://user:atharva777@cluster0.xtdnurz.mongodb.net/'
    );
  
    console.log('Database connected sucessfully');
  } catch (error) {
    console.log("Error from connecting ", error.message);
  }
};

export default connection;
