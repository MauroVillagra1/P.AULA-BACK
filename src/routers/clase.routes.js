import { Router } from "express";
import {
  crearClase,
  listarClase,
  actualizarClase,
  eliminarClase
} from "../controllers/clase.controllers.js";

const router = Router();

router.route("/clase")
  .get(listarClase)
  .post(crearClase);

router.route("/clase/:id")
  .put(actualizarClase)
  .delete(eliminarClase);

export default router;
