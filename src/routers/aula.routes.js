import { Router } from "express";
import {
  crearAula,
  listarAula,
  actualizarAula,
  eliminarAula
} from "../controllers/aula.controllers.js";

const router = Router();

router.route("/aula")
  .get(listarAula)
  .post(crearAula);

router.route("/aula/:id")
  .put(actualizarAula)
  .delete(eliminarAula);

export default router;
