import mongoose, { Schema } from "mongoose";
import User from './user.js'
import Products from './products.js'
const cartSchema = new mongoose.Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products:[{
        productId:{
            type:Schema.Types.ObjectId,
            ref:'Products'
        },
        quantity:Number
    }],
    favourates:[{
        productId:{
            type:Schema.Types.ObjectId,
            ref:'Products'
        }
    }]
})

const createSchema = mongoose.model('Cart',cartSchema);
export default createSchema;