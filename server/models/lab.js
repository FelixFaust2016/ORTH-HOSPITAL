const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  test: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Test", testSchema);
