import Comision from "../models/comisionSchema.js";

export const listarComision = async (req, res) => {
  try {
    const comisiones = await Comision.find().populate("carrera");
    res.status(200).json(comisiones);
  } catch {
    res.status(500).json({ error: "Error al obtener las comisiones" });
  }
};

export const crearComision = async (req, res) => {
  try {
    const { año, numero, carrera } = req.body;
    if (!año || !numero || !carrera)
      return res.status(400).json({ error: "Año, número y carrera son obligatorios" });

    const nuevaComision = new Comision({ año, numero, carrera });
    await nuevaComision.save();
    res.status(201).json(nuevaComision);
  } catch {
    res.status(500).json({ error: "Error al crear la comisión" });
  }
};

export const actualizarComision = async (req, res) => {
  try {
    const { id } = req.params;
    const { año, numero, carrera } = req.body;
    if (!año || !numero || !carrera)
      return res.status(400).json({ error: "Año, número y carrera son obligatorios" });

    const comision = await Comision.findByIdAndUpdate(id, { año, numero, carrera }, { new: true });
    if (!comision) return res.status(404).json({ error: "Comisión no encontrada" });

    res.status(200).json(comision);
  } catch {
    res.status(500).json({ error: "Error al actualizar la comisión" });
  }
};

export const eliminarComision = async (req, res) => {
  try {
    const { id } = req.params;
    const comision = await Comision.findByIdAndDelete(id);
    if (!comision) return res.status(404).json({ error: "Comisión no encontrada" });

    res.status(200).json({ mensaje: "Comisión eliminada correctamente" });
  } catch {
    res.status(500).json({ error: "Error al eliminar la comisión" });
  }
};
