import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        reqired:true
    },
    email:{
        type:String,
        unique:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

const createSchema = mongoose.model('User' , userSchema);
export default createSchema;