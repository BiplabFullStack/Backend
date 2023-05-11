//Export Only One Function
/*
const add = require("./oper")
console.log(add(5,8));
*/

//Export Two or many Function
/*
const{add1, sub1, mul1} = require("./oper")
console.log(add1(5,8));
console.log(sub1(6,7));
console.log(mul1(9,5));
*/

// ----------------------------------------- Using Destructure ---------------------------------------
const{add,name, sub, mul} = require("./oper")
console.log(add(5,8));
console.log(sub(9,7));
console.log(mul(7,9));
console.log(name);