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
const upDateProductos=(req, res)=>{}

//borrar los productos:
const deleteProductos=(req, res)=>{}

module.exports={
    getProductos,
    CreateProductos,
    upDateProductos,
    deleteProductos
}