//  Nodejs Modules link https://nodejs.org/api/fs.html
const fs = require("fs");
let text = fs.readFileSync("readthis.txt","utf-8");
text = text.replace("modules","Akhil");

console.log("the content of file is");
console.log(text);

console.log("Creatig a new file...");
fs.writeFileSync("Akhil.txt",text);

// There are many built in modules here is list https://www.w3schools.com/nodejs/ref_modules.asp 
// To learn modules read documentation is necessary 
// there are 3 types of modules - 1 built in module ,2 Creating our own module , 3 third party module 