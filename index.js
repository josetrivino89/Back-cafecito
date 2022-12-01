const express = require("express")
const conectarDB= require("./database")
const bodyParser = require ("body-parser")
const ProductoRoutes=require("./routes/producto")
const port = 4000
require("dotenv").config()
//Controladores:
const ProductosController = require("./controller/productosControler")
const app = express()
//parseamos el Body:
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
//coneccion a la Base:
conectarDB()
//Rutas de productos:
app.use('/api/producto',ProductoRoutes)
//Para que escuche el puerto:
app.listen(port,()=>{
    console.log(`server Liste in:${port}`);
})





