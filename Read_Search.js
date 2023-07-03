// 2] Read / Searching Data in Mongodb
//{} object bracket & [] array bracket
use akhilKart ;

// This Query will return all the objects with rating 4.5
db.items.find({rating: 4.5})
db.items.find({rating: {$gte: 4.5}})
db.items.find({rating: {$gt: 4.5}})

// And Operator
db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

// OR Operator
db.items.find({$or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}]})

db.items.find({$or:[{rating: {$gt: 3.5}}, {price:{$gt: 114000}}]})

// Will show only require things
db.items.find({rating: {$gt: 3.5}},{rating:1})
db.items.find({rating: {$gt: 3.5}},{rating:1,qty:1})