const express=require('express');
const router=express.Router();
//Login Page
router.get('/login',(req,res)=>res.render('login'));
//Register Page
router.get('/register',(req,res)=>res.render('register'));
//Register Handel
router.post('/register',(req,res)=>{
    const {name,email,password,password2 }=req.body;
    let errors=[];
    //check Required Fields
    if(!name|| !email || !password || !password2){
        errors.push({msg:'please fil in all  fields'});

    }
    //Check Password matche
    if(password !== password2){
        errors.push({msg:'Password Do not match'});
    }
    //check Length
    if(password.length<5){
        errors.push({msg:'Password must be at least 5 characters'});
    }
if(errors.length>0){

res.render('register',{
    errors,
    name,
    email,
    password,
    password2
})

}
else{
    res.send('pass');
}
    
});
module.exports=router;