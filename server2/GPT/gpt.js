import OpenAI from "openai";
import { config } from "dotenv";

config();


// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_AI_KEY,
//   dangerouslyAllowBrowser: true,
// });

const openai = new OpenAI();

export default openai;
