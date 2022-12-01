const mongoose = require('mongoose');

const conectarDB= async()=>{
    //try-catch para controlar la coneccion con la BD, si tiene un error directamente no la inicia
    try {
        await mongoose.connect(process.env.URI_CONECTION_DATABASE)

        console.log("Base de Datos conectada");

    } catch (error) {
        console.log(error);
        //esto es para que directamente no inicie la coneccion conla BDatos
        process.exit(1);
        
    }
}

module.exports= conectarDB
