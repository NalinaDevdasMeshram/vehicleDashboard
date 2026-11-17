import vehicleData from "../models/vehicleModel.js";

// create vehicle details
export const addVehicleDetails = async (req, res) => {
  try {
    const {
      registrationNumber,
      make,
      model,
      manufacturingYear,
      fuelType,
      odometer,
      nickname,
    } = req.body;
    if (
      odometer === undefined ||
      odometer === null ||
      odometer === "" ||
      !Number.isFinite(Number(odometer)) ||
      Number(odometer) <= 0
    ) {
      return res
        .status(400)
        .json({ message: "Invalid Please Enter correct Input" });
    }
    if (
      !registrationNumber ||
      !make ||
      !model ||
      !manufacturingYear ||
      !fuelType
    ) {
      return res.status(400).json({ message: "All feild Required" });
    }
    const existingVehicle = await vehicleData.findOne({ registrationNumber });
    if (existingVehicle) {
      return res.status(409).json({ message: "vehicle details already exist" });
    }

    const vehicle = await vehicleData.create({
      registrationNumber,
      make,
      model,
      manufacturingYear,
      fuelType,
      odometer,
      nickname,
    });
    return res.status(200).json({
      message: "Vehicle Details Add Successfull..",
      vehicle: {
        name: vehicle.name,
        registrationNumber: vehicle.registrationNumber,
        make: vehicle.make,
        model: vehicle.model,
        manufacturingYear: vehicle.manufacturingYear,
        fuelType: vehicle.fuelType,
        odometer: vehicle.odometer,
        nickename: vehicle.nickname,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

// getting all vehicle details
export const allVehicleDetails = async (req, res) => {
  try {
    const vehicle = await vehicleData.find();
    if (!vehicle) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json({
      message: "user details found successful",
      vehicle: {
        registrationNumber: vehicle.registrationNumber,
        make: vehicle.make,
        model: vehicle.model,
        manufacturingYear: vehicle.manufacturingYear,
        fuelType: vehicle.fuelType,
        odomater: vehicle.odometer,
        nickename: vehicle.nickname,
      },
      vehicle: vehicle.length,
    });
  } catch (error) {
    return res.status({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// getting particular vehicle details
export const vehicleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await vehicleData.findById(id);
    if (!user) {
      return res.json(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "user details found",
      user: {
        registrationNumber: user.registrationNumber,
        make: user.make,
        model: user.model,
        manufacturingYear: user.manufacturingYear,
        fuelType: user.fuelType,
        odomater: user.odometer,
        nickename: user.nickname,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// update vehicle details
export const updateVehicleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleData.findByIdAndUpdate(id);
    if (!vehicle) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    return res.status(200).json({
      message: "Vehicle Details Updates Successfully.",
      vehicle: {
        registrationNumber: vehicle.registrationNumber,
        make: vehicle.make,
        model: vehicle.model,
        manufacturingYear: vehicle.manufacturingYear,
        fuelType: vehicle.fuelType,
        odomater: vehicle.odometer,
        nickename: vehicle.nickname,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

// delete vehicle details
export const deleteVehicleDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await vehicleData.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).json({
        message: "user not found",
        user: {
          registrationNumber: vehicle.registrationNumber,
          make: vehicle.make,
          model: vehicle.model,
          manufacturingYear: vehicle.manufacturingYear,
          fuelType: vehicle.fuelType,
          odomater: vehicle.odometer,
          nickename: vehicle.nickname,
        },
      });
    }
    return res
      .status(200)
      .json({ message: "User Details Deleted Successfully." });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
