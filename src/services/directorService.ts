import Director, { IDirector } from "../models/Director";
import { getErrorMessage } from "../utils/helper";

export const createDirector = async (data: IDirector) => {
  try {
    const newDirector = await Director.create(data);
    return { status: "Success", data: newDirector };
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};

export const getDirectors = async () => {
  try {
    return await Director.find();
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};

export const deleteDirector = async (id: string) => {
  try {
    const deletedDirector = await Director.findByIdAndDelete(id);
    if (!deletedDirector) {
      return { status: "Failed", message: "Director not found" };
    }
    return { status: "Success", message: "Director deleted successfully" };
  } catch (error) {
    return { status: "Failed", message: getErrorMessage(error) };
  }
};
