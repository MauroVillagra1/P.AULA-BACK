import mongoose, { Schema } from "mongoose";

const comisionMateriaSchema = new Schema(
  {
    comision: { type: Schema.Types.ObjectId, ref: "Comision", required: true },
    materiaCarrera: { type: Schema.Types.ObjectId, ref: "MateriaCarrera", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("ComisionMateria", comisionMateriaSchema);