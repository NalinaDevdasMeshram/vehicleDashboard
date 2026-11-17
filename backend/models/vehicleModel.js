import mongoose from "mongoose";

const vehicleData = new mongoose.Schema(
  {
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      uppercase: true,
    },
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    manufacturingYear: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      required: true,
    },
    odometer: {
      type: Number,
      required: true,
    },
    nickname: {
      name: String,
    },
  },
  { timestamps: true },
);

export default mongoose.model("vehicle", vehicleData);
