import { Request, Response } from "express";
import * as directorService from "../services/directorService";
import { getErrorMessage } from "../utils/helper";
import { redisClient } from "../utils/redisClient";

// controller for creating a new director
export const createDirector = async (req: Request, res: Response) => {
  try {
    // calling the related service here...
    const response = await directorService.createDirector(req.body);
    // clearing the cache for the /directors route
    await redisClient.del("/directors");
    // if status is "Success" then return 201 status code, otherwise return 400 status code
    res.status(response.status === "Success" ? 201 : 400).json(response);
  } catch (error) {
    // if an error occurs, return 500 status code
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

// controller for getting all directors , again this is for development and testing purposes
export const getDirectors = async (_req: Request, res: Response) => {
  try {
    // calling the related service here...
    const response = await directorService.getDirectors();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

// controller for deleting a director by id
export const deleteDirector = async (req: Request, res: Response) => {
  try {
    // calling the related service here...
    const response = await directorService.deleteDirector(req.params.id);
    // clearing the cache for the /directors route
    await redisClient.del("/directors");
    res.status(response.status === "Success" ? 200 : 404).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};
