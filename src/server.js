require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import logger from "morgan";
import subscribersRouter from "./routes/subscribers";
import boardRouter from "./routes/board";
import urlRouter from "./routes/url";

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(logger("dev"));
app.use(express.json());

app.use("/url", urlRouter);
app.use("/subscribers", subscribersRouter);
app.use("/board", boardRouter);

app.listen(PORT, () =>
  console.log(`✅ Server runs on http://localhost:${PORT}`)
);
