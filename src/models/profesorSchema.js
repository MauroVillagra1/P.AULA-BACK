import mongoose, { Schema } from "mongoose";

const profesorSchema = new Schema(
  {
    nombre: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Profesor", profesorSchema);