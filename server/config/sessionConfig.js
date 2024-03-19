import session from "express-session";
import FileStore from "session-file-store";

const FileStoreInstance = FileStore(session);

const sessionConfig = {
  store: new FileStoreInstance(),
  name: "user_sid",
  secret: process.env.SESSION_SECRET || "test",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true, 
  },
};

export default sessionConfig;
