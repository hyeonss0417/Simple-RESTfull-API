import mongoose from "mongoose";

export const commentSchema = new mongoose.Schema(
  {
    contents: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
