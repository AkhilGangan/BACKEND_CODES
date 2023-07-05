// 4] Updating Data in Mongodb
//{} object bracket & [] array bracket
show dbs 
use akhilKart; 
show collections

db.items.updateOne({name:"Moto 50s"},{$set:{price: 2}})

db.items.updateMany({name:"Moto 50s"},{$set:{price: 3,rating:1}})

