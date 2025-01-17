import { Router } from "express";
import * as movieController from "../controllers/movieControllers";
import validateRequest from "../middleware/validateRequest";
import { movieSchemaValidate } from "../models/schemaValidate";

const router = Router();

router.post("/insertMovie", validateRequest(movieSchemaValidate), movieController.createMovie);
router.get("/getMovies", movieController.getMovies);
router.put("/updateMovie/:id", movieController.updateMovie);
router.delete("/deleteMovie/:id", movieController.deleteMovie);

export default router;
