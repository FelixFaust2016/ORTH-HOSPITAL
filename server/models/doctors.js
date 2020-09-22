const mongoose = require("mongoose");

const { categorySchema } = require("../models/category");

const doctorSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  created: {
    type: Date,
    default: Date.now(),
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
  description: {
    type: String,
  },
  qualification: {
    type: String,
  },
  timeAvailable: {
    type: String,
  },
  patients: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  appointments: [{ type : mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});

module.exports = mongoose.model("Doctor", doctorSchema);
module.exports.doctorSchema = doctorSchema;
