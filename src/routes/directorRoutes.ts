import { Router } from "express";
import * as directorControllers from "../controllers/directorControllers";
import { directorSchemaValidate } from "../models/schemaValidate";
import validateRequest from "../middleware/validateRequest";
import { cacheMiddleware } from "../middleware/cacheMiddleware";
const router = Router();

router.post(
  "/insertDirector",
  validateRequest(directorSchemaValidate),
  directorControllers.createDirector
);
router.get("/getDirectors",cacheMiddleware ,directorControllers.getDirectors);
router.delete("/deleteDirector/:id", directorControllers.deleteDirector);

export default router;
