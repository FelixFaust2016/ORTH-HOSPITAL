const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/orth");
// mongoose
//   .connect("mongodb://localhost/orth")
//   .then(() => console.log("Connected to MongoDb......"))
//   .catch(error => console.error("Not connected to MongoDb....."));

module.exports.User = require("./user")