import express from "express";

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json("hello");
});

app.listen(4000, () => {
  console.log("start lising at port  4000");
});
