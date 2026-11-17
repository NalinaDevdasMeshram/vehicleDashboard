import express from "express";
const router = express.Router();
import {
  addVehicleDetails,
  allVehicleDetails,
  vehicleDetails,
  updateVehicleDetails,
  deleteVehicleDetails,
} from "../controllers/vehicleController.js";

router.post("/add", addVehicleDetails);
router.get("/", allVehicleDetails);
router.get("/:id", vehicleDetails);
router.put("/:id", updateVehicleDetails);
router.delete("/:id", deleteVehicleDetails);

export default router;
