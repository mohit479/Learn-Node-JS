const expres =require('express');

const app =expres(); // sercer instance create karna k lia

app.get("/",(req ,res)=>{
    res.send("hello world");
})

app.get("/about",(req,res)=>{
    res.send("this is about page");
})

app.listen(3000); // server ko start krne ke liye