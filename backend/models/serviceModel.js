import mongoose from "mongoose";

const serviceData = new mongoose.Schema(
  {
    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "vehicle",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    servicetype: {
      type: String,
      required: true,
      trim: true,
    },
    scheduleDate: {
      type: Date,
      required: true,
    },
    estimateCost: {
      type: Number,
      required: true,
      min: 0,
    },
    serviceCenter: {
      type: String,
      required: true,
      trim: true,
    },
    notes: {
      type: String,
      default: "",
    },
    Status: {
      type: String,
      enum: [Scheduled, Completed, Cancelled],
      default: Scheduled,
    },
    actualCost: {
      type: Number,
      min: 0,
    },
    completionDate: {
      type: Date,
      required: true,
    },
    serviceOdometer: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true },
);
export default mongoose.model("services", serviceData);
