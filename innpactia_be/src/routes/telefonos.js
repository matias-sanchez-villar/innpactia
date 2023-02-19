import {telefonos_clientes, create} from "../controllers/telefono.controller.js"
import { Router } from "express";
import { bodyCreateValidator } from "../middlewares/telefono.validator.js";
const router = Router();

router.get("/telefonos_clientes/:idCliente", telefonos_clientes);
router.post("/create", bodyCreateValidator, create);

export default router;