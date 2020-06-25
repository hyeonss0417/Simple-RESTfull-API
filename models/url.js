import mongoose from "mongoose";

export const urlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
      unique: true,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: true,
    },
    callLog: {
      type: [Date],
    },
  },
  {
    timestamps: true,
  }
);

const Url = mongoose.model("Url", urlSchema);
export default Url;
