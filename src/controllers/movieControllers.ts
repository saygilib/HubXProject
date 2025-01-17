import { Request, Response } from "express";
import * as movieService from "../services/movieService";
import { getErrorMessage } from "../utils/helper";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const response = await movieService.createMovie(req.body);
    res.status(response.status === "Success" ? 201 : 400).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

export const getMovies = async (_req: Request, res: Response) => {
  try {
    const response = await movieService.getMovies();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const response = await movieService.updateMovie(req.params.id, req.body);
    res.status(response.status === "Success" ? 200 : 404).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  try {
    const response = await movieService.deleteMovie(req.params.id);
    res.status(response.status === "Success" ? 200 : 404).json(response);
  } catch (error) {
    res.status(500).json({ status: "Failed", message: getErrorMessage(error) });
  }
};
