import express from "express";
import mongoose from "mongoose";
import subscribersRouter from "./routes/subscribers";
require("dotenv").config();

const PORT = process.env.PORT || 3001;
const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use(express.json());
app.use("/subscribers", subscribersRouter);

app.listen(PORT, () =>
  console.log(`✅ Server runs on http://localhost:${PORT}`)
);
