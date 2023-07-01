//EXPRESS IS A WEB APPLICATION FRAMEWORK FOR NODEJS OR PACKAGE 
//IN CUSTOM BACKEND WE HAVE DONE ROUTING , USED IF ELSE , /HOME ,URL PARSING TO TAKE IN ANOTHER OPTION SO TO AVOID IT WE USED EXPRESS
//BASICALLY IT HANDLES ROUTING ,SCALABILTY AND MANY MORE THINGS AND IT IS FREE & OPEN SOURCE  


const express = require("express");//import  express module
const path =require("path");
const fs = require("fs");
const app = express();//making express app
const port = 80;//we used 80 port becoz it is easy to access it like localhost:80 or localhost ,we dont need to mention 1000,8000 etc so 

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'))//For serving static files//this is folder name we have written here
app.use(express.urlencoded())//middleware for getting html data

// PUG SPECIFIC STUFF
app.set('view engine','pug')// Set the template engine as pug
app.set('views', path.join(__dirname,'views'))//Set the views directory


// ENDPOINTS STUFF
app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely";
    const params = {'title':'Pubg is the best game','content':con};
    res.status(200).render('index.pug',params);
})

app.post('/', (req,res)=>{
    name = req.body.name//name are as per given name not id 
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    let outputToWrite = `The name of the client is ${name}, ${age} years old,${gender},residing at ${address}, More about him/her :${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message':'Your form has been submitted successfully'};
    res.status(200).render('index.pug',params);
})

//START THE SERVER
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);//listen is used to let the app know port to listen 
})


//Now we will see how to use html file and a static file
// Static files are those files which are publicly available and anyone can access it 


// app.get("/",(req,res)=>{
//     res.send("This is homepage of my first express app with Akhil ");
// });
//Our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Akhil', message: 'Hello there and thanks for telling me how to use pug!' })
// });

// app.get("/",(req,res)=>{
//     res.status(200).send("This is homepage of my first express app with Akhil ");
// });

// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app with Akhil ");
// });

// app.post("/about",(req,res)=>{
//     res.send("This is a post request about page of my first express app with Akhil ");
// });

// app.get("/this",(req,res)=>{
//     res.status(404).send("This page is not found ");
// });
