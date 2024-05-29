import express from "express";
import connection from "./database/db.js";
import router from "./routes/route.js";
import cors from "cors";
// import { config } from "dotenv";
import gptRoutes from "./routes/gptRoute.js"
// config();


const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/gpt",gptRoutes);
// const Port = process.env.port || 8002
connection();

app.listen(8001, () => {
  console.log(`Server running on port ${"8001"}`);
});
