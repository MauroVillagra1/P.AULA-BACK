import { Router } from "express";
import {
  crearComision,
  listarComision,
  actualizarComision,
  eliminarComision
} from "../controllers/comision.controllers.js";

const router = Router();

router.route("/")
  .get(listarComision)
  .post(crearComision);

router.route("/:id")
  .put(actualizarComision)
  .delete(eliminarComision);

export default router;
