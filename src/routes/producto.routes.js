import { Router } from "express";// *importamos la Routes Express
// nos nos olvidemos que termine con (.js)
import { prueba,crearproducto,listaProducto,editarProducto, deleteProducto } from "../controllers/productos.controlers.js";


const ruta=Router();
ruta.route('/prueba').get(prueba)
ruta.route('/productos').post(crearproducto)
ruta.route('/productolista').post(crearproducto).get(listaProducto)
ruta.route('/productos/:id').put(editarProducto)
ruta.route('/productos/:id').put(editarProducto).delete(deleteProducto)
export default ruta