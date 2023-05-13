//Events Module : 
/*
                 Node.js has a build in module, called Events .
                 Where You can Create -fire, and listen for your own events
    Example1 : Registering for the eventn to be fired only one time using once.
    Example2 : Create an events Emitter instance and register a couple of callbacks
    Example3  : Registering for the event with callback parameter.
    */
   const EventEmitter = require("events");
   const even = new EventEmitter()  // even is a object and EventEmitter is a class
   
   //Without parameter
   even.on("sayMyname",()=>{
    console.log("My name is Biplab");
   })
   even.emit("sayMyname")
   


      //With parameter
      even.on("checkPage",(sc,msg)=>{
        console.log(`Status code is ${sc} and The page is ${msg}`);
      })
      even.emit("checkPage",200,"ok")