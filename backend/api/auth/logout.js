import express from 'express'
const router = express.Router()

router.route('/logout')
        .get((req,res)=>{
            res.send("logout..")
        })

export default router