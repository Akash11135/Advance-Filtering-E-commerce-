import login from './api/auth/login.js'
import logout from './api/auth/logout.js'
import register from './api/auth/register.js'
import express from "express"
import mongoose from "mongoose"
import bodyParser from 'body-parser'
import cors from 'cors'
import env from "dotenv"
import profile from './api/auth/profile.js'
import cookieParser from 'cookie-parser'
env.config()

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const dbConnect = ()=>{
   try{
        mongoose.connect(process.env.MONGO_URI)
        console.log("connection with database successfull..👍")
        app.listen(process.env.PORT , ()=>{
        console.log("server running on port : ",process.env.PORT)
    })
   }catch(err){
        console.log("connection with db failed... ")
   }
}

dbConnect()



app.get("/" , (req,res)=>{
    res.send("Root page...")
})

app.use('/' , register );
app.use('/' , login);
app.use('/' , profile);
app.use('/' , logout)

