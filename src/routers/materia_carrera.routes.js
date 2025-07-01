import { Router } from "express";
import {
  crearMateriaCarrera,
  listarMateriaCarrera,
  actualizarMateriaCarrera,
  eliminarMateriaCarrera
} from "../controllers/materia_carrera.controllers.js";

const router = Router();

router.route("/")
  .get(listarMateriaCarrera)
  .post(crearMateriaCarrera);

router.route("/:id")
  .put(actualizarMateriaCarrera)
  .delete(eliminarMateriaCarrera);

export default router;
