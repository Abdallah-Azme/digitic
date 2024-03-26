import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import { dbConnect } from "./config/dbConnect";
import { authRouter } from "./routes/auth.route";

dbConnect();

const app = express();
app.use(express.json());

app.get("/api", (req, res) => {
  res.json("hello");
});

app.use("api/user", authRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("start listing at port ", PORT);
});
