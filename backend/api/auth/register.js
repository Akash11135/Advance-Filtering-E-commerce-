import express, { response } from 'express'
const router = express.Router()
import User from '../../modals/user.js'
import bcrypt from 'bcrypt'

router.route('/register')
        .post(async(req,res)=>{
            const response = {
                statusCode: "200",
                body: {}
            }
            try{
                const {Name , email , password, isAdmin} = req.body
                const duplicate = await User.findOne({email})
                if(duplicate){
                    response['body'] = 'EMAIL ALREADY EXISTS!';
                    response['statusCode'] = '409';
                    return res.status(200).send(response);
                }

                const hashedPwd = await bcrypt.hash(password , 10)

                const newUser = new User({
                    Name: Name,
                    password : hashedPwd,
                    email: email
                })
                await newUser.save()
                if(newUser){
                    response['statusCode'] = '200';
                    response['body'] = newUser
                    return res.status(200).send(response);
                }else{
                    return res.status(422).send("unable to save new user")
                }
            }catch(err){
                res.status(500).send({"error ":"UNABLE TO REGISTER"})
                console.log(err)
            }
        })

export default router