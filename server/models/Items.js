import mongoose from "mongoose";

// defines the data
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  itemMaker: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  itemModel: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  serialNumber: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  modelNumber: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  itemPowerType: {
    type: String,
    required: true,
    enum: ["Battery", "Electric", "Gas", "Other"]
  },
  requiredMaintenance: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
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
      "Other"
    ]
  },
  maintenanceDate: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  listOfPastMaintenanceDates: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  lastMaintenanceType: {
    type: String,
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
      "Other"
    ]
  },
  partsReplaced: {
    type: String,
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
      "Other"
    ]
  },
  partsAcquiredFromBusinessName: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  partsAcquiredFromBusinessURL: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  itemManualURL: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  dateAcquired: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  requiredSecondaryItem: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryItemRelated: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryItemMaker: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryItemModelNumber: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryItemSerialNumber: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  secondaryAttachmentsForItem: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  notes: [String]
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
