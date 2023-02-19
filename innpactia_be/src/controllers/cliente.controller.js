import connection from "../database/connection.js";

export const all = async (req, res) =>{
    try{
        const result = await connection.query("select * from clientes")
        return res.status(200).json(result);
    }catch(e){
        return res.status(404).json({error: "Error al listar los clientes, reintente en unos minutos"});
    }
}

export const create = async (req, res) =>{
    try{
        const {nombre, apellido} = req.body;
        const result = await connection.query(
            "INSERT INTO clientes(nombre, apellido) VALUES (?, ?);",
            [nombre, apellido]
        )
        return res.status(201).json({create: result});
    }catch(e){
        return res.status(404).json({error: "Error al crear un cliente, reintente en unos minutos"});
    }
}