const chalk = require("chalk")  // "chalk" Module
const validator = require("validator")  //"validator" module

//Using Chalk
console.log(chalk.blue('Hiii'));
console.log(chalk.blue.underline('Hello Biplab'));
console.log(chalk.blue.underline.inverse('How are you'));

//Using validator
const res = validator.isEmail('biplab123.com');
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));

//Mob Number
const mob =validator.isMobilePhone("3247569")
console.log(mob);

//URL
const url = validator.isURL("www.google.com")
console.log(url);
//Password
const Password = validator.isStrongPassword("Biplab@123")
console.log(Password);
