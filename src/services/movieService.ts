import Movie, { IMovie } from "../models/Movie";
import { getErrorMessage } from "../utils/helper";

// service for creating a new movie
export const createMovie = async (data: IMovie) => {
  try {
    const newMovie = await Movie.create(data);
    return { status: "Success", data: newMovie };
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};

// service for getting all movies with their directors
export const getMovies = async () => {
  try {
    return await Movie.find().populate("director");
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};

// service for updating a movie by id
export const updateMovie = async (id: string, data: Partial<IMovie>) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(id, data, { new: true });
    if (!updatedMovie) {
      return { status: "Failed", message: "Movie not found" };
    }
    return { status: "Success", data: updatedMovie };
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};

// service for deleting a movie by id
export const deleteMovie = async (id: string) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      return { status: "Failed", message: "Movie not found" };
    }
    return { status: "Success", message: "Movie deleted successfully" };
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};
