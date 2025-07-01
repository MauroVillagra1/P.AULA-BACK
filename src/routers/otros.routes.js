import { Router } from "express";
import {
  crearOtros,
  listarOtros,
  actualizarOtros,
  eliminarOtros
} from "../controllers/otros.controllers.js";

const router = Router();

router.route("/")
  .get(listarOtros)
  .post(crearOtros);

router.route("/:id")
  .put(actualizarOtros)
  .delete(eliminarOtros);

export default router;
