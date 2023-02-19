import connection from "../database/connection.js";

export const telefonos_clientes = async (req, res) =>{
    try{
        const {idCliente} = req.params;
        const result = await connection.query(
            "SELECT * FROM telefonos_clientes where idCliente = ?;",
            idCliente,
        )
        return res.status(200).json(result);
    }catch(e){
        return res.status(404).json({error: "Error al listar telefonos, reintente en unos minutos"});
    }
}

export const create = async (req, res) =>{
    try{
        const {numero, idCliente} = req.body;
        const exist = await connection.query(
            "SELECT * FROM telefonos_clientes where numero = ?;",
            idCliente
        );
        if(!exist.length) return res.status(404).json({error: "Error al insertar el id del cliente, reintente en unos minutos"});
        const result = await connection.query(
            "INSERT INTO telefonos_clientes (numero, idCliente) VALUES (?,?);",
            [numero, idCliente],
        )
        return res.status(200).json({create: result});
    }catch(e){
        return res.status(404).json({error: "Error al crear telefono, reintente en unos minutos"});
    }
}