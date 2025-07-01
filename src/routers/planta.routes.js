import { Router } from "express";
import {
  crearPlanta,
  listarPlanta,
  actualizarPlanta,
  eliminarPlanta
} from "../controllers/planta.controllers.js";

const router = Router();

router.route("/")
  .get(listarPlanta)
  .post(crearPlanta);

router.route("/:id")
  .put(actualizarPlanta)
  .delete(eliminarPlanta);

export default router;
