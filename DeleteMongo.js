// 3] Deleting Data in Mongodb
//{} object bracket & [] array bracket
show dbs 
use akhilKart; 
show collections

db.items.find({price:25000})

//Deleting Items from Mongodb
//deleteOne will delete the matching document entry and will delete the first entry in case of multi document match
db.items.deleteOne({price:25000})

//For deleting Many elements from collection
db.items.deleteMany({price:129000})

//For deleting the selected collection
db.vikas.drop()

//it deletes the Current data base
db.dropDatabase()