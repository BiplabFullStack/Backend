// ------------------------------------ OS MODULE ----------------------------------------
const OS =require("os")

console.log(OS.arch());  // Print Windowes Bit

const freemem =OS.freemem()
console.log(`${freemem/1024/1024/1024}`);
const totalmem =OS.totalmem()
console.log(`${totalmem/1024/1024/1024}`);

const hostName =OS.hostname()
console.log(hostName);
console.log(OS.tmpdir());
console.log(OS.type());
