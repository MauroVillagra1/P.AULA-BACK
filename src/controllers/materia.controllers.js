import Materia from "../models/materiaSchema.js";

export const listarMateria = async (req, res) => {
  try {
    const materias = await Materia.find();
    res.status(200).json(materias);
  } catch {
    res.status(500).json({ error: "Error al obtener las materias" });
  }
};

export const crearMateria = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const existente = await Materia.findOne({ nombre });
    if (existente) return res.status(400).json({ error: "La materia ya existe" });

    const nuevaMateria = new Materia({ nombre });
    await nuevaMateria.save();
    res.status(201).json(nuevaMateria);
  } catch {
    res.status(500).json({ error: "Error al crear la materia" });
  }
};

export const actualizarMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const materia = await Materia.findByIdAndUpdate(id, { nombre }, { new: true });
    if (!materia) return res.status(404).json({ error: "Materia no encontrada" });

    res.status(200).json(materia);
  } catch {
    res.status(500).json({ error: "Error al actualizar la materia" });
  }
};

export const eliminarMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const materia = await Materia.findByIdAndDelete(id);
    if (!materia) return res.status(404).json({ error: "Materia no encontrada" });

    res.status(200).json({ mensaje: "Materia eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la materia" });
  }
};
