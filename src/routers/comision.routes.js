import { Router } from "express";
import {
  crearComision,
  listarComision,
  actualizarComision,
  eliminarComision
} from "../controllers/comision.controllers.js";

const router = Router();

router.route("/comision")
  .get(listarComision)
  .post(crearComision);

router.route("/comision/:id")
  .put(actualizarComision)
  .delete(eliminarComision);

export default router;
