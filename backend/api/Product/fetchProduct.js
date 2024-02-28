import express from 'express'
import Products from '../../modals/products.js'
const router = express.Router()

router.route('/products/:id')
    .get(async (req, res) => {
        try{    
            const Uid = req.params.id
            const user = await Products.findById(Uid)
            res.status(200).send({user}) 
        }catch(err){
            res.send("error : "+err)
        }
    });

export default router