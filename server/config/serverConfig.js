import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import sessionConfig from "../config/sessionConfig.js";
import cors from 'cors';

const corsOption = {
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
}

const serverConfig = (app) => {
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static("public"));
  app.use(cors(corsOption));
};

export default serverConfig;
