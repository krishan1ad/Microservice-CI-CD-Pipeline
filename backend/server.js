// Import dependencies
const express = require("express");
const cors = require("cors");

// Initialize the app
const app = express();
const PORT = 3000;

// Enable CORS for all origins with full configuration
app.use(cors({
  origin: '*', // Allow all domains
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow common HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  credentials: false // Do not allow credentials like cookies or auth headers
}));

// Define a simple GET endpoint
app.get("/data", (req, res) => {
  res.json({
    message: "Hello from the Backend! I am DaudCloud-sudo running at version 2.0",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend is running at http://localhost:${PORT}`);
  console.log("🎉 Success");
});
