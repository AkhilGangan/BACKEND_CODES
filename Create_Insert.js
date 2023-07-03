// CRUD Means Create Read Update Delete
// 1] Creating/Inserting Data in mongodb
//{} object bracket & [] array bracket
use akhilKart;
db.items.insertOne({name:"Nokia 50s", price: 25000,rating:4.5, qty:233,sold:98});

// To Check Our Data of Table (Collection) & Rows(Document)
db.items.find();

// Give an arraybracket[] to Many
db.items.insertMany([{name:"Nokia 50s", price: 25000,rating:4.5, qty:233,sold:98},{name:"Moto 50s", price: 29000,rating:2.5, qty:133,sold:498},{name:"Oneplus 50s", price: 129000,rating:2.5, qty:633,sold:98,isBig: true}]);