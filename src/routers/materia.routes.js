import { Router } from "express";
import {
  crearMateria,
  listarMateria,
  actualizarMateria,
  eliminarMateria
} from "../controllers/materia.controllers.js";

const router = Router();

router.route("/")
  .get(listarMateria)
  .post(crearMateria);

router.route("/:id")
  .put(actualizarMateria)
  .delete(eliminarMateria);

export default router;
