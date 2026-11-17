import express from "express";
const app = express();
import dotenv from "dotenv";
import dbconnection from "./config/db.js";
import cors from "cors";
import vehicleRoute from "./routes/vehicleRoute.js";
dotenv.config();
const PORT = process.env.PORT;

// database connection
dbconnection();
// build-in communication
app.use(cors());
// middleware
app.use(express.json());

//route
app.use("/api/vehicles", vehicleRoute);

app.listen(PORT, () => {
  console.log(`server runnin on the PORT: ${PORT}`);
});
