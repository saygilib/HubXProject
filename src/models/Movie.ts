import mongoose, { Schema, Document } from "mongoose";

export interface IMovie extends Document {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  rating: number;
  imdbId: string; 
  director: mongoose.Types.ObjectId; // it will be a reference to the Director model, because in getMovies service i am populating the director field
}

// Movie schema definition 
const MovieSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true },
  imdbId: { type: String, unique: true, required: true },
  director: { type: mongoose.Schema.Types.ObjectId, ref: "Director", required: true },
});

export default mongoose.model<IMovie>("Movie", MovieSchema);
