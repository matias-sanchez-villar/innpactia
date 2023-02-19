import { body } from "express-validator"
import { validationResultExpress } from "./validationResultExpress.js"

export const bodyLoginValidator =[
    body("usuario", "Error al logearse intente ingresar nuevamente")
        .exists()
        .notEmpty()
        .trim()
        .isLength({min:3, max: 50})
        .bail()
        .isEmail()
        .bail()
        .normalizeEmail(),
    validationResultExpress
]