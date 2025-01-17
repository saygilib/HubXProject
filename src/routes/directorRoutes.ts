import { Router } from "express";
import * as directorControllers from "../controllers/directorControllers";
import { directorSchemaValidate } from "../models/schemaValidate";
import validateRequest from "../middleware/validateRequest";

const router = Router();

router.post(
  "/insertDirector",
  validateRequest(directorSchemaValidate),
  directorControllers.createDirector
);
router.get("/getDirectors", directorControllers.getDirectors);
router.delete("/deleteDirector/:id", directorControllers.deleteDirector);

export default router;
