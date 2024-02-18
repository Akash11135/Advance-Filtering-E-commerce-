import express, { response } from 'express'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
import User from '../../modals/user.js'
const router = express.Router()
router.route('/profile')
        .get((req,res)=>{
            const token = req.cookies['jwt-login']
             const response = {
                statusCode : "200",
                body: "",
                user:{}
            }           
            if(token){
                jwt.verify(token , process.env.JWT_KEY , {} , async(err , userData)=>{
                    if (err) throw err;
                    // const user = await User.findById(userData.id)
                    const user = await User.findOne({email:userData.email})
                    response['statusCode'] = 200
                    response['body'] = 'profile-fetched'
                    response['user'] = user
                    res.status(200).json(response)
                })
            }else{
                res.status(200).send(null)
            }
        })

export default router