var express = require('express');
var router = express.Router();
const userController = require('../../components/users/UserController');
const validation = require('../../middle/Validation');
const jwt = require('jsonwebtoken');
const { authenApp } = require('../../middle/Authen');
//api login
// r
router.post('/login',async(req,res,next)=>{
    try {
        const {email,password} = req.body;
        const user = await userController.login(email,password);
        if(user){
            // tao token
            const token = jwt.sign({user},'secret',{expiresIn:'1h'});

            return res.status(200).json({result:true,user:user,token:token});
        }
        else{
            return res.status(400).json({result:false,user:null});
        }
    
    } catch (error) {
        console.log(error);
        res.status(400).json({result:false});
    }
});
router.get('/logout',async(req,res,next)=>{
    try {
        req.session.destroy;
        let data ={
            logout:true,
            responeTimestamp:new Date(),
            statusCode:200,
            
        }
        res.status(200).json({result:true,data});
    
    } catch (error) {
        console.log(error);
        res.status(400).json({result:false});
    }
});
//api register
// api/user/register
router.post('/register', [validation.checkRegister], async (req, res, next) => {
    try{
        
        const {email, password, name} = req.body;
        const result = await userController.register(email, password, name);
        let data ={
            error:false,
            responeTimestamp:new Date(),
            statusCode:200,
            data:{}
        }
        return res.status(200).json({result,data});
    }catch(error){
        console.log(error);
        //next error; Chi chay web
        return res.status(400).json({result: false});
    }
});
router.post('/changepass', async (req, res, next) => {
    try{
        
        const {newPassword,cNewPassword} = req.body;
        const result = await userController.register(email, password, name);
        let data ={
            error:false,
            responeTimestamp:new Date(),
            statusCode:200,
            data:{}
        }
        return res.status(200).json({result,data});
    }catch(error){
        console.log(error);
        //next error; Chi chay web
        return res.status(400).json({result: false});
    }
});
// api gui mail
// api/user/sendmail
router.post('/sendmail',async(req,res,next)=>{
    try {
        const {email,subject} = req.body;
        let content=`<h1 style={color:'red'}>Chao ban</h1><p>Ban da dang ky thang cong</p><a href='facebook.com'>Facebook</a>`;
        const send =  await userController.sendMail(email,subject,content);
        return res.status(200).json({send,result:true}); 
    } catch (error) {
        console.log("sendmail error",error);
        return res.status(500).json({result:false});
    }
})
module.exports = router;