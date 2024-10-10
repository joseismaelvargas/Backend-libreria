import  Producto from "../database/model/productos.js"
export const prueba=(req,res)=>{
    console.log("Alguien hizo un solicitud de prueba")
    res.send('Hola mundo desde el backend')
   }

//*    Aqui creamos  los productos }POST
export const crearproducto=async (req,res)=>{
  try{
    // *Extraer el producto de la solicitud (req)
  
    // *Validar los datos del body
    // * Crear un objeto con el modelo del producto Producto
    const productonuevo=new Producto(req.body)
    await productonuevo.save()
    // *Enviar la respuesta que podimos crear el producto

   res.status(201).json({mensaje:"producto Creado"})
  }catch(error){
   console.error(error)
   res.status(500).json({
    mensaje:'Ocurrio un Error,no se pudo crear el producto'
   })
  }
   }

  export const listaProducto=async (req,res)=>{
    try{
     
      const producto=await Producto.find()
    
  
     res.status(200).json(producto)
     console.log("Se encontro el Producto")
    }catch(error){
     console.error(error)
     res.status(500).json({
      mensaje:'No se encontro el Producto'
     })
    }
     } 
 export const editarProducto=async(req,res)=>{
  try{
    console.log(req.body)
    console.log(req.params.id)
    // *balidar los datos del body

    // *Buscar el producto si existe
    const Buscarproducto=await Producto.findById(req.params.id)
      console.log(Buscarproducto)
      //  *si no se encontro el Producto
     if(!Buscarproducto){
      return res.status(404).json({mensaje:'No se encontro el Producto'})
     }
    //  si lo encontro el Producto
    await Producto.findByIdAndUpdate(req.params.id ,req.body)
    res.status(200).json({mensaje:'El producto fue Editado Correctamente'})
  }catch(error){
      console.log(error)
      res.status(500).json({
        mensaje:'Ocurrio un error no se pudo esditar el producto'
      })
  }
 }
 export const deleteProducto =async(req,res)=>{
     try{
      // verificar si el id es valido
      const buscar=await Producto.findById(req.params.id)
      // si esxiste el producto
      if(!buscar){
        return res.status(404).json({mensaje:'producto no encontrado'})
      }
      await Producto.findByIdAndDelete(req.params.id)
      res.status(200).json({mensaje:'se pudo borrar el Producto'})
     }catch(error){
     console.error(error)
     res.status(500).json({
      mensaje:'Ocurrio un error no se pudo esditar el producto'
    })
     
     }
 }
// export const obtenerProducto=async(req,res)=>{
//  try{
//   const productobuscado=await Producto.findById(req.params.id)
//   if(!productobuscado){
//     return res.status(404).json({mensaje:'producto no encontrado'})
  
//   }

//   res.status(200).json({mensaje:'se pudo Encontrar el producto'})
//  }catch(error){
//   console.error(error)
//      res.status(500).json({
//       mensaje:'Ocurrio un error no se pudo esditar el producto'
//     });
     
//  }
// };