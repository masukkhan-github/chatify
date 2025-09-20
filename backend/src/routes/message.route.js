import express from "express";
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controller/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import { arcjetProtection } from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection,protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.post("/send/:id", sendMessage);
router.get("/:id", getMessagesByUserId);

export default router;
