const mongoose = require("mongoose");

const { doctorSchema } = require("./doctors");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  reviewe: {
    type: "String",
  },
  doctorInfo: {
    type: doctorSchema,
    required: true,
  },
});
module.exports = mongoose.model("Review", reviewSchema);
module.exports.reviewSchema = reviewSchema;
