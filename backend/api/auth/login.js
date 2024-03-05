import express from "express"
const router = express.Router()
import bcrypt from 'bcrypt'
import User from '../../modals/user.js'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()

router.route('/login')
    .post(async(req,res)=>{
        const{email , password} = req.body
        const user = await User.findOne({email})

        const response = {
            statusCode : "200",
            body: "",
            user:{}
        }  
        try{
            if(!user){
                response['statusCode']="400"
                response['body']="user not found."
                res.status(200).send(response)
            }

            if(user){
                if(await bcrypt.compare(password , user.password)){
                    response['statusCode']="200"
                    response['body']="login success"
                    response['user']=user
                    const token = jwt.sign({email: user.email , Name:user.Name , id:user._id}, process.env.JWT_KEY )
                    res.cookie('jwt-login', token, { httpOnly: true, secure: true, sameSite: 'None' });
                    res.status(200).send(response)
                }else{
                    response['statusCode']="409"
                    response['body']="invalid username/password"
                    res.status(200).send(response)
                }
            }
        }catch(err){
            res.status(500).send("unable to login")
        }

        
})
    
export default router;