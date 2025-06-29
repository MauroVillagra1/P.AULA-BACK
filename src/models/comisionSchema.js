import mongoose, { Schema } from "mongoose";

const comisionSchema = new Schema(
  {
    año: { type: String, required: true },
    numero: { type: String, required: true },
    carrera: { type: Schema.Types.ObjectId, ref: "Carrera", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Comision", comisionSchema);