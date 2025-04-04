import express from "express";
import router from "./router";
import db from "./config/db";
import colors from 'colors'
import cors,{ CorsOptions } from "cors";
import morgan from "morgan";

//Conectar a db
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.green('Conexión exitosa a DB'))
    } catch (error) {
        console.log(error)
        console.log(colors.red('Error al conectarse a db'))
    }
}
connectDB()

const server = express()

const corsOptions: CorsOptions = {
    origin: function(origin,callback){
        if (origin===process.env.FRONTEND_URL) {
            callback(null,true)
        }else{
            callback(new Error('Error de CORS'))
        }
    }
}
server.use(cors(corsOptions))

//Leer datos de formularios
server.use(express.json())

server.use(morgan('dev'))

server.use('/api/products', router)

export default server