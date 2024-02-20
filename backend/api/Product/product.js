import express from 'express'
const router = express.Router()
import Products from '../../modals/products.js'


router.route('/products')
    .get(async(req,res)=>{
     try{
        const data = await Products.find()
        res.status(200).send({data})
   }catch(err){
        res.status(200).send({"msg":"data not found"})
   }
})

export default router