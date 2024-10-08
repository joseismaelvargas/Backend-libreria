// *Conectar la base de dato con el puerto
import mongoose from "mongoose";

const mongodb=process.env.MONGODB//*no olvides poner el /bdlibreria

mongoose.connect(mongodb);

const infoConecion=mongoose.connection;

infoConecion.once('open',()=>{
    console.info('Base de dato Conectada')
})
