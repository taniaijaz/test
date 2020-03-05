const express=require('express');
const router=express.Router();
//Login Page
router.get('/login',(req,res)=>res.send('Welcome Dear Its your First Attempt to login'));
//Register Page
router.get('/register',(req,res)=>res.render('register'));
//Register Handel
router.post('/register',(req,res)=>{
    Console.log(req.body)
    req.send('hello');
})
module.exports=router;