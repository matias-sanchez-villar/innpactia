import { all, create } from "../controllers/cliente.controller.js";
import { bodyCreateValidator } from "../middlewares/cliente.validator.js";
import { Router } from "express";
const router = Router();

router.get("/all", all);
router.post("/create", bodyCreateValidator, create);

export default router;