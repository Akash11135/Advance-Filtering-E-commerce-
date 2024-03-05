import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import Cart from '../../modals/cart.js';
import Products from '../../modals/products.js';

router.route('/cart/:id')
    .post(async(req, res) => {
        try {
            const id = req.params.id;
            const token = req.cookies['jwt-login'];
            
            if (!token) {
                return res.status(401).send('Not verified user, first login'); // Send response if token is missing
            }
            
            jwt.verify(token, process.env.JWT_KEY, {}, async (err, user) => {
                if (err) throw err;
                console.log("user id : ",user.id);
                const { products  } = req.body;
                const productsArray = products.map(item => ({ productId: item.productId, quantity: item.quantity }));
                
                const newCartItem = new Cart({
                    user: user.id,
                    products: productsArray,
                   
                });
                
                await newCartItem.save();
                
                if (newCartItem) {
                    
                    const productIds = productsArray.map(item => item.productId); 
                    const productsCart = await Products.find({ _id: { $in: productIds } });
                    
                    if (productsCart.length > 0) {
                        res.status(200).send(productsCart);

                    } else {
                        console.log('Cart products not found'); // Handle case where products in the cart are not found
                    }
                } else {
                    res.status(200).send({ message: 'Unable to add to cart' });
                }
            });
        } catch(err) {
            res.status(500).send("Internal Server Error"); // Send response for other errors
        }
    });
router.route('/cart').get((req,res)=>{
    const token = req.cookies['jwt-login'];
            
            if (!token) {
                return res.status(401).send('Not verified user, first login'); // Send response if token is missing
            }
            let cartProdIds;

            jwt.verify(token, process.env.JWT_KEY, {}, async (err, user) => {
                if (err) throw err;
                const cartProducts = await Cart.find({user:user.id});
                //here we want to get the product id from cart modal so that we can search that product in product modal and eccess the data.
                cartProducts.forEach((item)=>{
                    // return item._id
                    const product = item.products
                    product.forEach((product)=>{
                        cartProdIds = (product.productId)
                    })
                })
                if(cartProducts){
                    const productsCart = await Products.find({ _id: {$in : cartProdIds} });
                
                    res.status(200).send({productsCart})
                }else{
                    res.status(200).send({message:"no items in cart"})
                }
            });
})
export default router;
