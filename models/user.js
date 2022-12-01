const mongoose  = require("mongoose");

const UserSchema = mongoose.Schema({
    name:String,
    lastname: String,
    email:{
        type:String,
        require:true,
        unique:true
    },
    password: String,
    role:String,
    cloudinary_id: String,
    Active:{
        type: Boolean,
        default: false
    },
        
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"usuario",
        unique: true,
    },
    token:{
        type: String,
        require:true
    },
    create_at:{
        type: Date,
        default: Date.now,
        expire:3600

    }

})
module.exports= mongoose.model("Usuario",UserSchema)