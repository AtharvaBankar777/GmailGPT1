import express from "express";

import {
  sendMailController,
  getEmails,
  moveEmailsToBin,
  toggleStarredEmail,
  deleteEmails,
} from "../controller/emailController.js";

const router = express.Router();

router.post("/save", sendMailController);
router.get("/emails/:type", getEmails);
router.post("/save-draft", sendMailController);
router.post("/starred", toggleStarredEmail);
router.post("/bin", moveEmailsToBin);
router.delete("/delete", deleteEmails);


export default router;
