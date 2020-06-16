import express from "express";
import mongoose from "mongoose";

const PORT = 3001;
const app = express();

mongoose.connect("mongodb://localhost/subscribers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.listen(PORT, () =>
  console.log(`✅ Server runs on http://localhost:${PORT}`)
);
