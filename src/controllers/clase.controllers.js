import Clase from "../models/claseSchema.js";

export const listarClase = async (req, res) => {
  try {
    const clases = await Clase.find()
      .populate("aula")
      .populate("profesor")
      .populate("comision")
      .populate("materia");
    res.status(200).json(clases);
  } catch {
    res.status(500).json({ error: "Error al obtener las clases" });
  }
};

export const crearClase = async (req, res) => {
  try {
    const { aula, profesor, comision, materia, dia, horario_inicio, horario_fin } = req.body;
    if (!aula || !profesor || !comision || !materia || !dia || !horario_inicio || !horario_fin)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const nuevaClase = new Clase({ aula, profesor, comision, materia, dia, horario_inicio, horario_fin });
    await nuevaClase.save();
    res.status(201).json(nuevaClase);
  } catch {
    res.status(500).json({ error: "Error al crear la clase" });
  }
};

export const actualizarClase = async (req, res) => {
  try {
    const { id } = req.params;
    const { aula, profesor, comision, materia, dia, horario_inicio, horario_fin } = req.body;
    if (!aula || !profesor || !comision || !materia || !dia || !horario_inicio || !horario_fin)
      return res.status(400).json({ error: "Todos los campos son obligatorios" });

    const clase = await Clase.findByIdAndUpdate(
      id,
      { aula, profesor, comision, materia, dia, horario_inicio, horario_fin },
      { new: true }
    );
    if (!clase) return res.status(404).json({ error: "Clase no encontrada" });

    res.status(200).json(clase);
  } catch {
    res.status(500).json({ error: "Error al actualizar la clase" });
  }
};

export const eliminarClase = async (req, res) => {
  try {
    const { id } = req.params;
    const clase = await Clase.findByIdAndDelete(id);
    if (!clase) return res.status(404).json({ error: "Clase no encontrada" });

    res.status(200).json({ mensaje: "Clase eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la clase" });
  }
};

export const listarClasesDelDia = async (req, res) => {
  try {
    const { dia } = req.query;

    if (!dia) {
      return res.status(400).json({ error: "Debes proporcionar un día en la query (?dia=Lunes)" });
    }

    const clases = await Clase.find({ dia })
      .populate("aula")
      .populate("profesor")
      .populate("comision")
      .populate("materia");

    res.status(200).json(clases);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las clases del día" });
  }
};
