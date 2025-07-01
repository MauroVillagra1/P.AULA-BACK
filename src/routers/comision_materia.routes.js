import { Router } from "express";
import {
  crearComisionMateria,
  listarComisionMateria,
  actualizarComisionMateria,
  eliminarComisionMateria
} from "../controllers/comision_materia.controllers.js";

const router = Router();

router.route("/")
  .get(listarComisionMateria)
  .post(crearComisionMateria);

router.route("/:id")
  .put(actualizarComisionMateria)
  .delete(eliminarComisionMateria);

export default router;
