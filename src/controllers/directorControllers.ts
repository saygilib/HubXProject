import { Request, Response } from "express";
import * as directorService from "../services/directorService";
import { getErrorMessage } from "../utils/helper";

export const createDirector = async (req: Request, res: Response) => {
  try {
    const response = await directorService.createDirector(req.body);
    res.status(response.status === "Success" ? 201 : 400).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

export const getDirectors = async (_req: Request, res: Response) => {
  try {
    const response = await directorService.getDirectors();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

export const deleteDirector = async (req: Request, res: Response) => {
  try {
    const response = await directorService.deleteDirector(req.params.id);
    res.status(response.status === "Success" ? 200 : 404).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};
