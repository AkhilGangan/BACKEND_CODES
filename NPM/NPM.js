console.log("This is about npm - node package manager");


//npm init make a package json folder 
// in that folder install packages are shown along with version 
// also if we uninstall a package it will get remove from that folder in dependencies 
// packages are some files that we are using in our project 
//node modules are modules related to our projects 


// TO INSTALL A PARTICULAR VERSION 
//npm install slugify@1.3.5 
// 1.3.5 means major.minor.patch -patch means bugfixes 
// sometimes there may be many packages in node modules this is because each package is dependant on other. 
//npm install nodemon --save-dev- will show devdependencies means it is only for development purpose and not for production
//npm install nodemon --global - to use nodemon globally into any file folder or anywhere 
// nodemon helps us to run directly after saving means it run automatically in terminal
// npm i - is shortcut to install package 
// "^" tullu means it will exactly install a version of a package
// "~" if there is new patch then it will install it 
//npm view nodemon version - to check version 