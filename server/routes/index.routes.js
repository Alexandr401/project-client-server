import express from "express";
import Conversation from "./api/Conversation.routes.js"; // Указываем расширение .js для явного импорта файла

const router = express.Router();

router.use('/conversation', Conversation);

export default router;
