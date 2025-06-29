import { Router } from "express";
import {
  crearPlanta,
  listarPlanta,
  actualizarPlanta,
  eliminarPlanta
} from "../controllers/planta.controllers.js";

const router = Router();

router.route("/planta")
  .get(listarPlanta)
  .post(crearPlanta);

router.route("/planta/:id")
  .put(actualizarPlanta)
  .delete(eliminarPlanta);

export default router;
