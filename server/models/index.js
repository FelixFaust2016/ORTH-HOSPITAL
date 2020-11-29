const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/orth", {
  useFindAndModify: false,
});
// mongoose
//   .connect("mongodb://localhost/orth")
//   .then(() => console.log("Connected to MongoDb......"))
//   .catch(error => console.error("Not connected to MongoDb....."));

module.exports.User = require("./user");
module.exports.Doctor = require("./doctors");
module.exports.Category = require("./category");
module.exports.Appointment = require("./appiontment");
module.exports.Quotes = require("./quotes");
module.exports.Review = require("./review");
module.exports.Profile = require("./profile");
module.exports.Test = require("./lab")