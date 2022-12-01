const express = require ('express')
const ProductosController= require("../controller/productosControler")

const router=express.Router()

//recurso para traer todo losproducto
router.get('/',ProductosController.getProductos)
//recurso para crear  un producto
router.post('/',ProductosController.CreateProductos)
//recurso para editar un producto
router.put('/:id',ProductosController.upDateProductos)//aqui le agregamos el id para poder buscarlo y actualizarlo
//recurso para borrar un producto
router.delete('/:id',ProductosController.deleteProductos)
//recurso para buscar un producto
router.get('/:id',ProductosController.buscarProductos)//aqui le agregamos el id para poder buscarlo

module.exports=router;