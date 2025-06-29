import mongoose, { Schema } from "mongoose";

const otrosSchema = new Schema(
  {
    planta: { type: Schema.Types.ObjectId, ref: "Planta", required: true },
    nombre: { type: String, required: true, unique: true },
    dia: { type: String, required: true },
    horario_inicio: { type: String, required: true },
    horario_fin: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Otros", otrosSchema);