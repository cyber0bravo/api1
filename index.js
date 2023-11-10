var express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("Hello world Qklsce");
});
app.listen(3000);
