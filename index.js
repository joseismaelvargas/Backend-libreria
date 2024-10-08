import express from 'express'
import morgan from 'morgan';//exportar morgan
import cors from 'cors'
// Herramintas node que busca la direccion del archivo
import path from 'path'
import { fileURLToPath } from 'url';
import'./src/database/dbConection.js'
import ruta from './src/routes/producto.routes.js';


// 1.configurar un puerto
const app=express();

app.set('port',process.env.PORT||4000)
app.listen(app.get('port'),()=>{
    console.info('estoy escuchando el puerto '+app.get('port'))
})


// 2-configurar middlewares(Funciones para usar)
app.use(morgan('dev')) //nos da informacion extra de la terminal 
app.use(cors())//permite conexiones remotas

app.use(express.json())//interpreta los datos en formato jsn de la solicitud
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url)
console.log(__filename)
const __nameCarpeta=path.dirname(__filename)
// const __public=path.join()
app.use(express.static(path.join(__nameCarpeta,'/public')))//Agarra la direccion de la carpeta public



// 3-configurar las rutas

//http://localhost:4000/prueba
app.use("/api",ruta)
// Usar postman para probar el puerto
