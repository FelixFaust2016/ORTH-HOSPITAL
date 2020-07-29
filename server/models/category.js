const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 555,
    minlength: 2
  },
  pic: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model("Category", categorySchema);
module.exports.categorySchema = categorySchema;

