import { Router } from "express";
import {
  crearClase,
  listarClase,
  actualizarClase,
  eliminarClase,
  listarClasesDelDia
} from "../controllers/clase.controllers.js";

const router = Router();

router.route("/")
  .get(listarClase)
  .post(crearClase);

router.get("/dia", listarClasesDelDia);

router.route("/:id")
  .put(actualizarClase)
  .delete(eliminarClase);


export default router;
