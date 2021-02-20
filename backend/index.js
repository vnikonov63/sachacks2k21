import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/pleasebemearcy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("The server is up");
});

app.listen(PORT, () => {
  console.log(`The server is listsening on port ${PORT}`);
});
