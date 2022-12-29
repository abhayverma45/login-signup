const mongoose=require('mongoose');

const Usermodel = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true

    }

   
})
const User=mongoose.model('user',Usermodel)
module.exports=User;
// userschema=define the structure of data