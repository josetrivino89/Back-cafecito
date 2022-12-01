const ProductosModel= require("../models/productos")
//obtener los productos en la Base:
const getProductos = async(req, res)=>{
    try {
        const productos = await ProductosModel.find()
        if (productos) {
            //devolvemos el msj con los productos que haya encontrado
            return res.status(200).send(productos)
            
        } else {
            //si no hay productos devuelve un array sin nada
            return res.status(200).send([])
        }
    } catch (error) {
        return res.status(500).send(error)
        
    }
}
//crear los productos y mandarlos a la Base:
const CreateProductos=async(req, res)=>{
    //1- necesitamos tener la info de los productos, que la sacamos del reques:
    console.log(req.body);
    //2- traemos la informacion desde el servidos:
    const{ProductName,Price,ImgUrl,Category}= req.body
    //3-creamos el nuevo producto
    const newProducto = new ProductosModel({
        ProductName,
        Price,
        ImgUrl,
        Category
    })
    //4- Hacemos un Try-catch, para ver si el producto ya existe y si no existe lo guardamos, sino tiramos un error:
    try {
        const producto = await newProducto.save()        
        return res.status(200).send(producto)
    } catch (error) {
        res.status(400).send({msg:"El producto ya existe"})
        
    }
}
//actualizar los productos y mandarlos a la Base:
const upDateProductos= async (req, res)=>{
    //1-hacemos la reestructuracion de lo que va en la ruta que sera dinamica:
    const{id}=req.params
    //2- accedemos al body:
    const productoData = req.body
    //3-creamos un try-catch para crear una respuesta cuando todo esta bien:
    try {
        const productoDB = await ProductosModel.findById(id)
        //buscamos el producto en la BD con el metodo findByID de moongose
        await ProductosModel.findByIdAndUpdate(id,productoData)
        res.status(200).send({msg:"Producto actualizado correctamente"})
       
        
    } catch (error) {
        res.status(400).send({msg:"Producto  no pudo ser actualizado"})
        
    }
}
//borrar los productos:
const deleteProductos= async(req, res)=>{
    //1-hacemos la reestructuracion de lo que va en la ruta que sera dinamica:
    const{id}=req.params
    //2-creamos un try-catch para crear una respuesta cuando todo esta bien:
    try {
    //3- buscamos el producto por el ID de que le asigna mongoDB, y usamos el metodo findByIdAndDelete de moongose, aqui no hace falta la constante porque no queremos que nos devuelva el producto eliminado
        await ProductosModel.findByIdAndDelete(id)
        //hacemos un res del producto buscado para que nos lo muestre          
        res.status(200).send({msg:"Producto eliminado correctamente"})
       
        
    } catch (error) {
        //hacemos un res por si no encuentra el producto por la ID
        res.status(400).send({msg:"Producto no encontrado"})
        
    }

}

//buscar los productos:
const buscarProductos=async(req, res)=>{
        //1-hacemos la reestructuracion de lo que va en la ruta que sera dinamica:
        const{id}=req.params
        //2-creamos un try-catch para crear una respuesta cuando todo esta bien:
        try {
        //3- creamos una cosntante y buscamos el producto por el ID de que le asigna mongoDB, es importante crear la constante para luego pasarle
            const productoBuscado = await ProductosModel.findById(id)
            //hacemos un res del producto buscado para que nos lo muestre          
            res.status(200).send(productoBuscado)
           // en el postman -insomina debemos poner el id en la direccion para que nos lo busque
            
        } catch (error) {
            //hacemos un res por si no encuentra el producto por la ID
            res.status(400).send({msg:"Producto no encontrado"})
            
        }

}

module.exports={
    getProductos,
    CreateProductos,
    upDateProductos,
    deleteProductos,
    buscarProductos
}