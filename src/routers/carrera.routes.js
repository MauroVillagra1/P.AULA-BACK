import { Router } from "express";
import {
  crearCarrera,
  listarCarrera,
  actualizarCarrera,
  eliminarCarrera
} from "../controllers/carrera.controllers.js";

const router = Router();

router.route("/")
  .get(listarCarrera)
  .post(crearCarrera);

router.route("/:id")
  .put(actualizarCarrera)
  .delete(eliminarCarrera);

export default router;
