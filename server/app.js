// "Import" the Express module instead of http
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import items from "./controllers/items.js";

// Load environment variables from .env file
dotenv.config();

// connect to Mongo DB via Mongoose
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// get the PORT from the environment variables, OR use 3000 as default
const PORT = process.env.PORT || 3000;

// Initialize the Express application
const app = express();

// middleware
const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

app.use(cors());
app.use(express.json());
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:3000/
app.get("/", (request, response) => {
  response.send("Welcome to the Capstone SPA REST API");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

// handles any URL that starts with "/items" ie http://localhost:3000/items
app.use("/items", items);

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
