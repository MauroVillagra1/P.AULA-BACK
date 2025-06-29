import ComisionMateria from "../models/comision_materia.Schema.js";

export const listarComisionMateria = async (req, res) => {
  try {
    const lista = await ComisionMateria.find()
      .populate("comision")
      .populate("materiaCarrera");
    res.status(200).json(lista);
  } catch {
    res.status(500).json({ error: "Error al obtener la lista" });
  }
};

export const crearComisionMateria = async (req, res) => {
  try {
    const { comision, materiaCarrera } = req.body;
    if (!comision || !materiaCarrera)
      return res.status(400).json({ error: "Comisión y materia-carrera son obligatorias" });

    const existente = await ComisionMateria.findOne({ comision, materiaCarrera });
    if (existente) return res.status(400).json({ error: "Ya existe esta relación" });

    const nuevo = new ComisionMateria({ comision, materiaCarrera });
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch {
    res.status(500).json({ error: "Error al crear la relación" });
  }
};

export const actualizarComisionMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { comision, materiaCarrera } = req.body;
    if (!comision || !materiaCarrera)
      return res.status(400).json({ error: "Comisión y materia-carrera son obligatorias" });

    const actualizado = await ComisionMateria.findByIdAndUpdate(
      id,
      { comision, materiaCarrera },
      { new: true }
    );
    if (!actualizado) return res.status(404).json({ error: "Relación no encontrada" });

    res.status(200).json(actualizado);
  } catch {
    res.status(500).json({ error: "Error al actualizar la relación" });
  }
};

export const eliminarComisionMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await ComisionMateria.findByIdAndDelete(id);
    if (!eliminado) return res.status(404).json({ error: "Relación no encontrada" });

    res.status(200).json({ mensaje: "Relación eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la relación" });
  }
};
