//JSON : JavaScript Object Notation, It is Transport ans Storing data
//JSON is used when data is send from a server to a web page
const fs = require("fs");
const obj = {
    name: "Biplab Roy",
    College: "CoochBehar Govt Engg College",
    Dept: "E.C.E"
}

//Convert into JSON format
const jsondata = JSON.stringify(obj);
//jsondata Store into another file
fs.writeFile("mydetails.json", jsondata, (err) => {
    console.log("Done");
})

//Read the file 
fs.readFile("mydetails.json", "utf-8", (err, data) => {
    console.log(data); //Getting o/p JSON format

    //Convert into Object format
    const objData = JSON.parse(data)
    console.log(objData);  //Getting o/p Object format
})
