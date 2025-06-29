import Aula from "../models/aulaSchema.js";

export const listarAula = async (req, res) => {
  try {
    const aulas = await Aula.find().populate("planta");
    res.status(200).json(aulas);
  } catch {
    res.status(500).json({ error: "Error al obtener las aulas" });
  }
};

export const crearAula = async (req, res) => {
  try {
    const { nombre, planta } = req.body;
    if (!nombre || !planta)
      return res.status(400).json({ error: "Nombre y planta son obligatorios" });

    const existente = await Aula.findOne({ nombre });
    if (existente) return res.status(400).json({ error: "El aula ya existe" });

    const nuevaAula = new Aula({ nombre, planta });
    await nuevaAula.save();
    res.status(201).json(nuevaAula);
  } catch {
    res.status(500).json({ error: "Error al crear el aula" });
  }
};

export const actualizarAula = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, planta } = req.body;
    if (!nombre || !planta)
      return res.status(400).json({ error: "Nombre y planta son obligatorios" });

    const aula = await Aula.findByIdAndUpdate(id, { nombre, planta }, { new: true });
    if (!aula) return res.status(404).json({ error: "Aula no encontrada" });

    res.status(200).json(aula);
  } catch {
    res.status(500).json({ error: "Error al actualizar el aula" });
  }
};

export const eliminarAula = async (req, res) => {
  try {
    const { id } = req.params;
    const aula = await Aula.findByIdAndDelete(id);
    if (!aula) return res.status(404).json({ error: "Aula no encontrada" });

    res.status(200).json({ mensaje: "Aula eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar el aula" });
  }
};
