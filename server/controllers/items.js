import { Router } from "express";
import Item from "../models/Item.js";

const router = Router();

// Create item route ; http://localhost/3000/items/
router.post("/", async (request, response) => {
  try {
    // creates in memory instance of our item
    const newItem = new Item(request.body);
    // saves data to MongoDB server
    const data = await newItem.save();
    // puts response in variable 'data'
    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all items route http://localhost:3000/items
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Item.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single item by ID http://localhost:3000/items/{id hash}
router.get("/:id", async (request, response) => {
  try {
    const data = await Item.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Delete an item by ID http://localhost:3000/items/{id hash}
router.delete("/:id", async (request, response) => {
  try {
    const data = await Item.findByIdAndDelete(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single item by ID http://localhost:3000/items/{id hash}
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Item.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          name: body.name,
          maker: body.maker,
          model: body.model,
          serialNumber: body.serialNumber,
          modelNumber: body.modelNumber,
          powerType: body.powerType,
          requiredMaintenance: body.requiredMaintenance,
          frequencyOfMaintenance: body.frequencyOfMaintenance,
          maintenanceDate: body.maintenanceDate,
          listOfPastMaintenanceDates: body.listOfPastMaintenanceDates,
          lastMaintenanceType: body.lastMaintenanceType,
          partsReplaced: body.partsReplaced,
          partsAcquiredFromBusinessName: body.partsAcquiredFromBusinessName,
          partsAcquiredFromBusinessURL: body.partsAcquiredFromBusinessURL,
          manualURL: body.manualURL,
          dateAcquired: body.dateAcquired,
          requiredSecondary: body.requiredSecondary,
          secondaryRelated: body.secondaryRelated,
          secondaryMaker: body.secondaryMaker,
          secondaryModelNumber: body.secondaryModelNumber,
          secondarySerialNumber: body.secondarySerialNumber,
          secondaryAttachments: body.secondaryAttachments,
          notes: body.notes
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

export default router;
