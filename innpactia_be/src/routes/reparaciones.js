import {all, reparaciones_telefono, create}  from "../controllers/reparaciones.controller.js";
import { Router } from "express";
import { bodyCreateValidator } from "../middlewares/reparaciones.validator.js";
const router = Router();

router.get("/all", all);
router.get("/reparaciones_telefono/:idTelefono", reparaciones_telefono);
router.post("/create", create);

export default router;