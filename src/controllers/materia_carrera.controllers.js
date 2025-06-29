import MateriaCarrera from "../models/materia_carreraSchema.js";

export const listarMateriaCarrera = async (req, res) => {
  try {
    const lista = await MateriaCarrera.find()
      .populate("carrera")
      .populate("materia");
    res.status(200).json(lista);
  } catch {
    res.status(500).json({ error: "Error al obtener la lista" });
  }
};

export const crearMateriaCarrera = async (req, res) => {
  try {
    const { carrera, materia } = req.body;
    if (!carrera || !materia)
      return res.status(400).json({ error: "Carrera y materia son obligatorias" });

    const existente = await MateriaCarrera.findOne({ carrera, materia });
    if (existente) return res.status(400).json({ error: "Ya existe esta relación" });

    const nuevo = new MateriaCarrera({ carrera, materia });
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch {
    res.status(500).json({ error: "Error al crear la relación" });
  }
};

export const actualizarMateriaCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const { carrera, materia } = req.body;
    if (!carrera || !materia)
      return res.status(400).json({ error: "Carrera y materia son obligatorias" });

    const actualizado = await MateriaCarrera.findByIdAndUpdate(
      id,
      { carrera, materia },
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ error: "Relación no encontrada" });

    res.status(200).json(actualizado);
  } catch {
    res.status(500).json({ error: "Error al actualizar la relación" });
  }
};

export const eliminarMateriaCarrera = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await MateriaCarrera.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: "Relación no encontrada" });

    res.status(200).json({ mensaje: "Relación eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la relación" });
  }
};
