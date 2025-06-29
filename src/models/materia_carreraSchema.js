import mongoose, { Schema } from "mongoose";

const materiaCarreraSchema = new Schema(
  {
    carrera: { type: Schema.Types.ObjectId, ref: "Carrera", required: true },
    materia: { type: Schema.Types.ObjectId, ref: "Materia", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("MateriaCarrera", materiaCarreraSchema);