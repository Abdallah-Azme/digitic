import express from "express";

const authRouter = express.Router();

authRouter.post("/register", (req, res) => {
  res.json("hi");
});

export { authRouter };
