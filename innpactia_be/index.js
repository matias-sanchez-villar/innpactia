import cliente  from "./src/routes/cliente.js";
import reparaciones  from "./src/routes/reparaciones.js";
import telefonos  from "./src/routes/telefonos.js";
import usuario  from "./src/routes/usuario.js";
import "dotenv/config";
import cors from 'cors';
import express from "express";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/cliente", cliente);
app.use("/api/reparaciones", reparaciones);
app.use("/api/telefonos", telefonos);
app.use("/api/usuario", usuario);

app.use("*", (req, res) => {
    console.log(req)
    res.status(200).json("Bienvenido a innpactia")
})

app.listen(process.env.PORT || 8080, ()=> console.log(`http://localhost:${process.env.PORT || 8080}/`));