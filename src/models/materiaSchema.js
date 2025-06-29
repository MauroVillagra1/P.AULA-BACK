import mongoose, { Schema } from "mongoose";

const materiaSchema = new Schema(
  {
    nombre: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Materia", materiaSchema);