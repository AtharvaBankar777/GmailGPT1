import express from "express";

import {GetGptData} from "../controller/GptController.js"

const router = express.Router();

router.post("/getDataFromGPT",GetGptData)


export default router;
