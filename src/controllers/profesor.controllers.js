import Profesor from "../models/profesorSchema.js";

export const listarProfesor = async (req, res) => {
  try {
    const profesores = await Profesor.find();
    res.status(200).json(profesores);
  } catch {
    res.status(500).json({ error: "Error al obtener los profesores" });
  }
};

export const crearProfesor = async (req, res) => {
  try {
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const existente = await Profesor.findOne({ nombre });
    if (existente) return res.status(400).json({ error: "El profesor ya existe" });

    const nuevoProfesor = new Profesor({ nombre });
    await nuevoProfesor.save();
    res.status(201).json(nuevoProfesor);
  } catch {
    res.status(500).json({ error: "Error al crear el profesor" });
  }
};

export const actualizarProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre) return res.status(400).json({ error: "El nombre es obligatorio" });

    const profesor = await Profesor.findByIdAndUpdate(id, { nombre }, { new: true });
    if (!profesor) return res.status(404).json({ error: "Profesor no encontrado" });

    res.status(200).json(profesor);
  } catch {
    res.status(500).json({ error: "Error al actualizar el profesor" });
  }
};

export const eliminarProfesor = async (req, res) => {
  try {
    const { id } = req.params;
    const profesor = await Profesor.findByIdAndDelete(id);
    if (!profesor) return res.status(404).json({ error: "Profesor no encontrado" });

    res.status(200).json({ mensaje: "Profesor eliminado correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar el profesor" });
  }
};
