import { body } from "express-validator"
import { validationResultExpress } from "./validationResultExpress.js"

export const bodyCreateValidator =[
    body("nombre", "Nombre incorrecto intente nuevamente")
        .exists()
        .not()
        .isEmpty()
        .trim()
        .bail()
        .isLength({min:3, max: 50}),
    body("apellido", "Apellido incorrecto intente nuevamente")
        .exists()
        .not()
        .isEmpty()
        .trim()
        .bail()
        .isLength({min:3, max: 50}),
    validationResultExpress
]