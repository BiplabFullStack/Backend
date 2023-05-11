//Export Only One Function
/*
const add =(a,b)=>{
    return a+b;
}

module.exports = add
*/


//Export Two or many Function
/*
const add =(a,b)=>{
    return a+b;
}

const sub =(a,b)=>{
    return a-b;
}

const mul =(a,b)=>{
    return a*b;
}
module.exports.add1 =add;
module.exports.sub1 =sub;
module.exports.mul1 =mul;
*/


// ----------------------------------------- Using Destructure ---------------------------------------
const name ="Biplab Coder"
const add =(a,b)=>{
    return a+b;
}

const sub =(a,b)=>{
    return a-b;
}

const mul =(a,b)=>{
    return a*b;
}
module.exports ={add, sub, mul,name};