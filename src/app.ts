import express, { Express, Request, Response } from "express";
import { connectRedis } from "./utils/redisClient";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./database";
import movieRoutes from "./routes/movieRoutes";
import directorRoutes from "./routes/directorRoutes";
import cors from "cors";
// Load environment variables from .env file
dotenv.config();

// Connect to Redis
connectRedis();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define routes for the application
app.use("/api", directorRoutes);
app.use("/api", movieRoutes);

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
