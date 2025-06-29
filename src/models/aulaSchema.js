import mongoose, { Schema } from "mongoose";

const aulaSchema = new Schema(
  {
    nombre: { type: String, required: true, unique: true },
    planta: { type: Schema.Types.ObjectId, ref: "Planta", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Aula", aulaSchema);