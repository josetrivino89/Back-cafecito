const mongoose  = require("mongoose");

const ProductoSchema = mongoose.Schema({
    ProductName: {
        type:String,
        require: true,
        unique:true,
        maxlength:100,
    },
    Price: {   
        type:Number,
        require:true,
    },
    ImgUrl:{
        type: String,
        require:true,
    },
    Category:{
        type: String,
        require:true,
    }
 });

  module.exports= mongoose.model("Producto",ProductoSchema)
