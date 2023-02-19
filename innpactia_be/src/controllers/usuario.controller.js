import connection from "../database/connection.js";

export const login = async (req, res) =>{
    try{
        const {usuario, clave} = req.body;
        const result = await connection.query(
            "SELECT * FROM usuarios where usuario = ? and clave = ?;",
            [usuario, clave]
        )
        if(!result.length) return res.status(200).json({error: "Usuario o clave incorrecto, reintente nuevamente"});
        return res.status(200).json({usuario, clave});
    }catch(e){
        return res.status(404).json({error: "Error al iniciar session, reintente en unos minutos"});
    }
}