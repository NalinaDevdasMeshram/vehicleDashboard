import mongoose from "mongoose";

const dbconnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("mongodb connected Successfully.");
  } catch (error) {
    console.log("error", error.message);
  }
};

export default dbconnection;
