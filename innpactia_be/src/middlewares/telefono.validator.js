import {body, param} from "express-validator"
import { validationResultExpress } from "./validationResultExpress.js"

export const bodyCreateValidator =[
    body("numero", "Numero de telefono incorrecto intente nuevamente")
        .exists()
        .trim()
        .isInt()
        .bail()
        .isLength({ min: 7, max: 15}),
    validationResultExpress
]