import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./database";
import movieRoutes from "./routes/movieRoutes";
import directorRoutes from "./routes/directorRoutes";
import cors from "cors";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", directorRoutes);
app.use("/api", movieRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
