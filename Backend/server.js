import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import teamRoutes from "./routes/teamRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // to accept JSON data
app.use("/team", teamRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/projects", projectRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("🟢 API is running and connected to MongoDB!");
});

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
    console.log(`🚀 Server running on http://localhost:${PORT}`)
);
