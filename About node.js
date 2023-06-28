// console.log("Hello World");// type node and file name tab to run 
//imp point**Always run the server after saving code 
//NODE REPL MEANS READ EVALUATE PRINT LOOP 
// for example a= 3 c = 2 a+c ,.exit for coming out of file 
// _ means last variable in REPL like a = 34 ,_ will show 34 and _ + 2 = 36 
// double tab click will show something like modules ,globally variables
const http = require('http'); //giving http and hostname and port no 

const hostname = '127.0.0.1';
const port = 3000;
// using below module to print hello world (req means request and res means response)
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');//instead of plain put html for below code run 
//   res.end('Hello Worlds This is Akhil Gangan'); 
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Flexbox Properties</title>
      <style>
          .container {
              height: 544px;
              width: 100%;
              border: 2px solid black;
              display: flex;
              /* Initialize the container as flexbox */
  
  
              /* Flex properties for a flex container */
  
              /* flex-direction: row; Default value of flex-direction is row */
              /* flex-direction: column;
              flex-direction: row-reverse;
              flex-direction: column-reverse; */
  
              /* flex-wrap: wrap;Default value of flex-wrap is no-wrap */
              /* flex-wrap: wrap-reverse; */
  
              /* this is a shorthand for flex-direction and flex-wrap */
              /* flex-flow: row-reverse wrap; */
  
              /* justify-content will justify the content in horizontal direction */
              /* justify-content: center;
              justify-content: space-between;
              justify-content: space-evenly;
              justify-content: space-around; */
  
              /* align-items will justify the content in vertical direction */
              /* align-items: center;
              align-items: flex-end;
              align-items: flex-start;
              align-items:stretch; */
  
          }
  
          .item {
              width: 200px;
              height: 200px;
              background-color: tomato;
              border: 2px solid green;
              margin: 10px;
              padding: 3px;
          }
  
          #item-1{
              /* Flex properties for a flex item */
              /* Higher the order ,later it shows up in the conatiner */
              /* order: 2; */
  
              /* flex-grow: 2;*/
              flex-shrink: 2; 
          }
  
          #item-2 {
  
              /* flex-grow: 3;
              flex-shrink: 3; */
              flex-basis: 160px;
              /* when flex-direction is set to row flex basis will control width */
              /* when flex-direction is set to column flex basis will control height */
          }
  
          #item-3 {
              /* order: 30; */
              /* flex: 2 2 230px; */
              align-self: flex-start;
              align-self: flex-end;
               align-self: center; 
          }
      </style>
  </head>
  
  <body>
      <h1>This is Flexbox</h1>
      <div class="container">
          <div class="item" id="item-1">First box</div>
          <div class="item" id="item-2">Second box</div>
          <div class="item" id="item-3">Third box</div>
          <!-- <div class="item" id="item-4">Fourth box</div>
          <div class="item" id="item-5">Fifth box</div>
          <div class="item" id="item-6">Sixth box</div> -->
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});