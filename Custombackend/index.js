//CUSTOM BACKEND MEANS IT WILL SERVE FILES ACCORDING TO USER REQUIREMENT 

const http = require ('http');
const fs = require ('fs');

const hostname = '127.0.0.1';//localhost
const port = 3000;//random port
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('./about.html');
const services = fs.readFileSync('./services.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if (url =='/'){
        res.end(home);
    }
    else if (url =='/about'){
        res.end(about);
    }
    else if (url =='/services'){
        res.end(services);
    }
    else if (url =='/contact'){
        res.end(contact);
    }
    else {
        res.statusCode = 200;
        res.end("<h1>404 not found </h1>");

    }
});//will use express js instead of if else here 

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});