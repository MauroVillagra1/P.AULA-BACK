import Carrera from "../models/carreraSchema.js";

export const listarCarrera = async (req, res) => {
  try {
    const carreras = await Carrera.find();
    res.status(200).json(carreras);
  } catch {
    res.status(500).json({ error: "Error al obtener las carreras" });
  }
};

export const crearCarrera = async (req, res) => {
  try {
    const { codigo, nombre } = req.body;
    if (!codigo || !nombre)
      return res.status(400).json({ error: "Código y nombre son obligatorios" });

    const existenteCodigo = await Carrera.findOne({ codigo });
    if (existenteCodigo) return res.status(400).json({ error: "El código ya existe" });

    const existenteNombre = await Carrera.findOne({ nombre });
    if (existenteNombre) return res.status(400).json({ error: "La carrera ya existe" });

    const nuevaCarrera = new Carrera({ codigo, nombre });
    await nuevaCarrera.save();
    res.status(201).json(nuevaCarrera);
  } catch {
    res.status(500).json({ error: "Error al crear la carrera" });
  }
};

export const actualizarCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const { codigo, nombre } = req.body;
    if (!codigo || !nombre)
      return res.status(400).json({ error: "Código y nombre son obligatorios" });

    const carrera = await Carrera.findByIdAndUpdate(id, { codigo, nombre }, { new: true });
    if (!carrera) return res.status(404).json({ error: "Carrera no encontrada" });

    res.status(200).json(carrera);
  } catch {
    res.status(500).json({ error: "Error al actualizar la carrera" });
  }
};

export const eliminarCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const carrera = await Carrera.findByIdAndDelete(id);
    if (!carrera) return res.status(404).json({ error: "Carrera no encontrada" });

    res.status(200).json({ mensaje: "Carrera eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la carrera" });
  }
};
