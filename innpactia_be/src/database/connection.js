import "dotenv/config";
import util from "util"
import mysql from "mysql";

const connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

connection.getConnection((err, connection)=>{
    if(err) throw err;
    connection.release();
    console.log("data base connected")
})

connection.query = util.promisify(connection.query);

export default connection;
