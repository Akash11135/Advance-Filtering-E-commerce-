import express from 'express'
const router = express.Router()

router.route('/logout')
        .get((req,res)=>{
            const response = {
                statusCode:"200",
                body:""
            }
            res.clearCookie('jwt-login')
            response['statusCode'] = "200"
            response['body'] = "successfully logged out." 
            res.status(200).send(response)
        })

export default router