import {login} from "../controllers/usuario.controller.js"
import { bodyLoginValidator } from "../middlewares/usuario.validator.js";
import { Router } from "express";
const router = Router();

router.post("/login", bodyLoginValidator, login);

export default router;