import { Router } from "express";
import {
  crearMateriaCarrera,
  listarMateriaCarrera,
  actualizarMateriaCarrera,
  eliminarMateriaCarrera
} from "../controllers/materiaCarrera.controllers.js";

const router = Router();

router.route("/materia-carrera")
  .get(listarMateriaCarrera)
  .post(crearMateriaCarrera);

router.route("/materia-carrera/:id")
  .put(actualizarMateriaCarrera)
  .delete(eliminarMateriaCarrera);

export default router;
