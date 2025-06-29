import Planta from "../models/plantaSchema.js";

export const listarPlanta = async (req, res) => {
  try {
    const plantas = await Planta.find();
    res.status(200).json(plantas);
  } catch {
    res.status(500).json({ error: "Error al obtener las plantas" });
  }
};

export const crearPlanta = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const existente = await Planta.findOne({ nombre });
    if (existente) return res.status(400).json({ error: "La planta ya existe" });

    const nuevaPlanta = new Planta({ nombre });
    await nuevaPlanta.save();
    res.status(201).json(nuevaPlanta);
  } catch {
    res.status(500).json({ error: "Error al crear la planta" });
  }
};

export const actualizarPlanta = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const planta = await Planta.findByIdAndUpdate(id, { nombre }, { new: true });
    if (!planta) return res.status(404).json({ error: "Planta no encontrada" });

    res.status(200).json(planta);
  } catch {
    res.status(500).json({ error: "Error al actualizar la planta" });
  }
};

export const eliminarPlanta = async (req, res) => {
  try {
    const { id } = req.params;
    const planta = await Planta.findByIdAndDelete(id);
    if (!planta) return res.status(404).json({ error: "Planta no encontrada" });

    res.status(200).json({ mensaje: "Planta eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la planta" });
  }
};
