// ---------------------------------------- Path Module -----------------------------------
const path =require("path")
console.log(path.dirname("/c/Users/Biplab Roy/Desktop/Youtube Node.js/Backend/Youtube_Nodejs"));
console.log(path.basename("/c/Users/Biplab Roy/Desktop/Youtube Node.js/Backend/Youtube_Nodejs"));
console.log(path.parse("/c/Users/Biplab Roy/Desktop/Youtube Node.js/Backend/Youtube_Nodejs/tut6.js"));

const pathName =path.parse("/c/Users/Biplab Roy/Desktop/Youtube Node.js/Backend/Youtube_Nodejs/tut6.js")
console.log(pathName.name);  // access only path name