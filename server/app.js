// "Import" the Express module instead of http
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

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
  response.send("Welcome to the Class SPA REST API");
});

// Handle the request with HTTP GET method from http://localhost:3000/status
app.get("/status", (request, response) => {
  // Create the headers for response by default 200
  // Create the response body
  // End and return the response
  response.json({ message: "Service healthy" });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
