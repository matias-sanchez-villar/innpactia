import {body, param} from "express-validator"
import { validationResultExpress } from "./validationResultExpress.js"

export const bodyCreateValidator =[
    body("idTelefono", "Numero de telefono incorrecto intente nuevamente")
        .exists()
        .trim()
        .isInt()
        .bail()
        .isLength({ min: 7, max: 15}),
    body("titulo", "Titulo incorrecto intente nuevamente")
        .optional()
        .isLength({max: 50}),
    body("descripcion", "Descripcion incorrecto intente nuevamente")
        .optional()
        .isLength({max: 50}),
    body("fecha", "Fecha incorrecto intente nuevamente")
        .exists()
        .not()
        .isEmpty()
        .trim()
        .bail()
        .isLength({min:10, max: 20}),
    validationResultExpress
]