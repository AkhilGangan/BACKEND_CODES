//Mongoose is a connection between Nodejs and mongodb
// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/akhilKart");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  //console.log("We are connected now..");
}
//Schema means which type of data is require
const kittySchema = new mongoose.Schema({
  name: String,
});

kittySchema.methods.speak = function() {
  const greeting = "My name is " + this.name;
  console.log(greeting);
};

const Kitten = mongoose.model("akhilKitty", kittySchema);

const akhilKitty = new Kitten({ name: "akhilKitty" });
const akhilKitty2 = new Kitten({ name: "akhilKitty2" });
// console.log(akhilKitty.name);
// akhilKitty.speak();

akhilKitty.save();
//akhilKitty.speak();

akhilKitty2.save();
//akhilKitty2.speak();

// const kittens = Kitten.find();
const kittens= Kitten.find({ name: /akhilKitty/ })
console.log(kittens);