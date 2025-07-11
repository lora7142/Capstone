import mongoose from "mongoose";

// defines the data
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  maker: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  serialNumber: {
    type: String
  },
  modelNumber: {
    type: String
  },
  powerType: {
    type: String,
    required: true,
    enum: ["Battery", "Electric", "Gas", "Other"]
  },
  requiredMaintenance: {
    type: String
  },
  frequencyOfMaintenance: {
    type: String,
    enum: [
      "Weekly",
      "Monthly",
      "Every 3 Months",
      "Every 4 Months",
      "Every 6 Months",
      "Yearly",
      "Other",
      "None"
    ]
  },
  maintenanceDate: {
    type: String
  },
  listOfPastMaintenanceDates: {
    type: String
  },
  lastMaintenanceType: {
    type: [String],
    enum: [
      "Battery",
      "Belt",
      "Chain",
      "Filter",
      "Fuel Line",
      "Gasket",
      "Oil Change",
      "Primer Bulb",
      "Spark Plug Change",
      "Seal",
      "Starter Motor",
      "Other",
      "None"
    ]
  },
  partsReplaced: {
    type: [String],
    enum: [
      "Air Filter",
      "Battery",
      "Belt",
      "Blade",
      "Chain",
      "Fuel Filter",
      "Fuel Line",
      "Gasket",
      "Light Bulb",
      "Oil Filter",
      "Primer Bulb",
      "Recoil Starter Cord",
      "Spark Plug",
      "Seal",
      "Starter Motor",
      "Tires",
      "Other",
      "None"
    ]
  },
  partsAcquiredFromBusinessName: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  partsAcquiredFromBusinessURL: {
    type: String
  },
  manualURL: {
    type: String
  },
  dateAcquired: {
    type: String
  },
  requiredSecondary: {
    type: String
  },
  secondaryRelated: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryMaker: {
    type: String
  },
  secondaryModelNumber: {
    type: String
  },
  secondarySerialNumber: {
    type: String
  },
  secondaryAttachments: {
    type: String
  },
  notes: String
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
