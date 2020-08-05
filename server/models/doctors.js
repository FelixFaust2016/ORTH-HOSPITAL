const mongoose = require("mongoose");

const { categorySchema } = require("../models/category");

const doctorSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 555,
    minlength: 2,
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 555,
    minlength: 2,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: categorySchema,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    maxlength: 5,
    minlength: 1,
    required: true,
  },
  description:{
    type: String
  },
  qualification: {
    type: String
  },
  timeAvailable: {
    type: String
  },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Doctor", doctorSchema);
module.exports.doctorSchema = doctorSchema;
