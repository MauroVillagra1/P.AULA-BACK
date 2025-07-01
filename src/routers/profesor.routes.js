import { Router } from "express";
import {
  crearProfesor,
  listarProfesor,
  actualizarProfesor,
  eliminarProfesor
} from "../controllers/profesor.controllers.js";

const router = Router();

router.route("/")
  .get(listarProfesor)
  .post(crearProfesor);

router.route("/:id")
  .put(actualizarProfesor)
  .delete(eliminarProfesor);

export default router;
