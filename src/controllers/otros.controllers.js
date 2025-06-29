import Otros from "../models/otrosSchema.js";

export const listarOtros = async (req, res) => {
  try {
    const otros = await Otros.find().populate("planta");
    res.status(200).json(otros);
  } catch {
    res.status(500).json({ error: "Error al obtener los otros" });
  }
};

export const crearOtros = async (req, res) => {
  try {
    const { planta, nombre, dia, horario_inicio, horario_fin } = req.body;
    if (!planta || !nombre || !dia || !horario_inicio || !horario_fin)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const existente = await Otros.findOne({ nombre });
    if (existente) return res.status(400).json({ error: "Ya existe un registro con ese nombre" });

    const nuevo = new Otros({ planta, nombre, dia, horario_inicio, horario_fin });
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch {
    res.status(500).json({ error: "Error al crear el registro" });
  }
};

export const actualizarOtros = async (req, res) => {
  try {
    const { id } = req.params;
    const { planta, nombre, dia, horario_inicio, horario_fin } = req.body;
    if (!planta || !nombre || !dia || !horario_inicio || !horario_fin)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const actualizado = await Otros.findByIdAndUpdate(
      id,
      { planta, nombre, dia, horario_inicio, horario_fin },
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ error: "Registro no encontrado" });

    res.status(200).json(actualizado);
  } catch {
    res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

export const eliminarOtros = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Otros.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: "Registro no encontrado" });

    res.status(200).json({ mensaje: "Registro eliminado correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar el registro" });
  }
};
