import mongoose, { Schema, Document } from "mongoose";

// Director interface definition
export interface IDirector extends Document {
  firstName: string;
  secondName: string;
  birthDate: Date;
  bio: string;
}

// Director schema definition
const DirectorSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  secondName: { type: String, required: true },
  birthDate: { type: Date, required: true },
  bio: { type: String, required: true },
});

export default mongoose.model<IDirector>("Director", DirectorSchema);
