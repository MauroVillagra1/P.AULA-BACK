import mongoose, { Schema } from "mongoose";

const plantaSchema = new Schema(
  {
    nombre: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default mongoose.model("Planta", plantaSchema);
