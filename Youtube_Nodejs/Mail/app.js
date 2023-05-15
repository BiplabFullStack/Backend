const express = require("express")
const app = express();
const sendMail =require("./controller/sendmail")
const port =8000;
app.get("/",(req, res)=>{
  res.send("I am Biplab")
})

app.get("/mail", sendMail)
const start =async()=>{
  try{
    app.listen(port,()=>{
      console.log(`Server is running ${port}`);
    })
  }
  catch(err){
    console.log(err);
  }
}
start()



