const express = require("express");
const app = express();
const PORT =8000;

//Get API
app.get("/", (req,res)=>{
    res.write("<h1>Welcome to the Home page</h1>");
    res.send();
})

//
app.get("/about", (req,res)=>{
    res.send({
        "name":"Biplab Roy",
        "roll":3
    });
})

app.listen(PORT,()=>{
    console.log(`Port running with ${PORT}`);
})
