const http = require('http');
const fs = require('fs');
const fileContent = fs.readFileSync('pseudo selectors and designing.html');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(fileContent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})

//80 port means we do not mention in ip address 127.0.0.1 but if 8000 is there then like this we have to mention port http://127.0.0.1:8000/
// for url directly we used 80 and for different services we need differnt port like 8000 ,1100 etc 