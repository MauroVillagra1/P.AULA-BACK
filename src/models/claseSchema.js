import mongoose, { Schema } from "mongoose";

const claseSchema = new Schema(
  {
    aula: { type: Schema.Types.ObjectId, ref: "Aula", required: true },
    profesor: { type: Schema.Types.ObjectId, ref: "Profesor", required: true },
    comision: { type: Schema.Types.ObjectId, ref: "Comision", required: true },
    materia: {type: Schema.Types.ObjectId, ref:"Materia", required:true},
    dia: { type: String, required: true },
    horario_inicio: { type: String, required: true },
    horario_fin: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Clase", claseSchema);