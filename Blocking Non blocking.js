//Synchronous or Blocking
// -Line by line execution 

//Asynchronous or Non-Blocking
// -Line by line execution not guranteed 
// -callbacks will fire 

const fs = require("fs");
fs.readFile("readthis.txt","utf-8",(err,data)=>{
    //console.log(a,b);//a is null and b will show content 
    console.log(data);//a is null and b will show content as per documentation
});
console.log("This is a message"); 
//if change txt file name will show error with the help of callback
//** one thing notice this is a message shows first then other commands this is what asychronous does 
//in asyn the readfile takes time till that other command runs  
