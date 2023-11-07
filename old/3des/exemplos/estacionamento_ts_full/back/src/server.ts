import env from "dotenv";
import express from "express";
import router from "./views/routes";
import "./dao/db";

const app = express();
const PORT = env.config().parsed?.PORT || 3000;

app.use(express.json())
  .use("/", router);

app.listen(PORT, () => {
  console.log(`Servidor executando em http://localhost:${PORT}`);
});