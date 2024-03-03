import express from 'express'
const router = express.Router()
import jwt from 'jsonwebtoken'
import Cart from '../../modals/cart.js'
import Products from '../../modals/products.js'
router.route('/cart/:id')
    .post(async(req,res)=>{
        try{
            const id = req.params.id;
            const token = req.cookies['jwt-login']
            let cartProdIds;
            if(!token) {
                return res.status(401).send('Not verified user, first login'); // Send response if token is missing
            }
            jwt.verify(token , process.env.JWT_KEY,{}, async (err , data) => {
                if (err) throw err;
                const { products, favourates, quantity } = req.body;
                const productsArray = products.map(item => item.productId);
                const favouritesArray = favourates.map(item => item.productId);
                const newCartItem = new Cart({
                    products: productsArray.map(productId => ({ productId, quantity })),
                    favourates: favouritesArray.map(productId => ({ productId }))
                });
                await newCartItem.save();
                if(newCartItem){
                    res.status(200).send({ message: 'Successfully added to cart'});
                    const fetchProduct = await Cart.findOne({'products.productId':id});
                    if (fetchProduct) {
                            const productIds = fetchProduct.products.map(item => item.productId); 
                            const productsCart = await Products.find({ _id: { $in: productIds } });
                            console.log("products--->",productsCart);  
                    } else {
                            console.log('Cart not found'); // Handle case where cart is not found
                    }
                }else{
                    res.status(200).send({message:'Unable to add to cart'})
                }
            });

            
                
        } catch(err){
            res.status(500).send("Internal Server Error"); // Send response for other errors
        }
    });

export default router;
