import { Router } from "express";
import {
  crearComisionMateria,
  listarComisionMateria,
  actualizarComisionMateria,
  eliminarComisionMateria
} from "../controllers/comisionMateria.controllers.js";

const router = Router();

router.route("/comision-materia")
  .get(listarComisionMateria)
  .post(crearComisionMateria);

router.route("/comision-materia/:id")
  .put(actualizarComisionMateria)
  .delete(eliminarComisionMateria);

export default router;
