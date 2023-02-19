import connection from "../database/connection.js";

export const all = async (req, res) =>{
    try{
        const result = await connection.query("SELECT id, idCliente ,numero as 'idTelefono', titulo, descripcion, fecha FROM reparaciones_telefonos rt inner join telefonos_clientes tc on rt.idTelefono = tc.numero order by fecha desc;")
        return res.status(200).json(result);
    }catch(e){
        return res.status(404).json({error: "Error al buscar reparaciones, reintente en unos minutos"});
    }
}

export const reparaciones_telefono = async (req, res) =>{
    try{
        const {idTelefono} = req.params;
        const result = await connection.query(
            "SELECT * FROM reparaciones_telefonos where idTelefono = ?;",
            idTelefono
        )
        return res.status(200).json(result);
    }catch(e){
        return res.status(404).json({error: "Error al iniciar session, reintente en unos minutos"});
    }
}

export const create = async (req, res) =>{
    try{
        const {idTelefono, titulo, descripcion, fecha} = req.body;
        console.log(idTelefono, numero, titulo, descripcion, typeof fecha)
        const exist = await connection.query(
            "SELECT * FROM telefonos_clientes where id = ?;",
            idTelefono
        );
        if(!exist.length) return res.status(404).json({error: "Error al insertar el numero de telefono, reintente en unos minutos"});
        const result = await connection.query(
            "INSERT INTO reparaciones_telefonos (idTelefono, titulo, descripcion, fecha) VALUES (?,?,?,?);",
            [idTelefono, titulo, descripcion, fecha]
        )
        return res.status(201).json({create: result});
    }catch(e){
        return res.status(404).json({error: "Error al iniciar session, reintente en unos minutos"});
    }
}