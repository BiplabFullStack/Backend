const express = require("express");
const path =require("path");
const app =express();
const Port =3000;


const templatepath =path.join(__dirname,"../template")
//console.log(templatepath);
app.set("views", templatepath)

//Home page 
app.get("/",(req,res)=>{
    res.render("index.hbs")
})

app.get("/",(req, res)=>{
    res.send("I am Biplab Roy ")
})

//About page
app.get("/about",(req,res)=>{
    res.render("about.hbs")
})


app.listen(Port, ()=>{
    console.log(`Server is running port ${Port}`);
})