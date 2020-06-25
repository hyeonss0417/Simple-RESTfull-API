import mongoose from "mongoose";
import { commentSchema } from "./comment";

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    comments: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Board = mongoose.model("Board", boardSchema);
export default Board;
