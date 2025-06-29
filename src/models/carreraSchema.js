import mongoose, { Schema } from "mongoose";

const carreraSchema = new Schema(
  {
    codigo: { type: String, required: true, unique: true },
    nombre: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Carrera", carreraSchema);