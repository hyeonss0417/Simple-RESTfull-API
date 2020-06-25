import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subscribedToChannel: {
      type: String,
      required: true,
    },
    subscribeDate: {
      type: Date,
      required: true,
      default: () => Date.now(),
    },
    meta: {
      test: Number,
      str: String,
    },
  },
  {
    timestamps: true,
  }
);

subscriberSchema.statics.findAll = function () {
  return this.find({});
};

const Subscriber = mongoose.model("Subscriber", subscriberSchema);
export default Subscriber;
