import express from "express";
import config from "./config/serverConfig.js"; 
import IndexRoute from "./routes/index.routes.js";

const app = express();

config(app);

const PORT = 3000;

app.use("/", IndexRoute);

app.listen(PORT, () => {
    console.log("Сервер запущен на порту:", PORT);
});
