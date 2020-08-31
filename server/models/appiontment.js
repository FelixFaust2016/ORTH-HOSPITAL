const mongoose = require("mongoose");

const { doctorSchema } = require("../models/doctors");

// const approvedSchema = new mongoose.Schema({
//   isApproved: {
//     type: Boolean,
//     default: false
//   }
// });

// const durationSchema = new mongoose.Schema({
//   start: {
//     type: String
//   },
//   end: {
//     type: String
//   }
// });

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  doctor: {
    type: doctorSchema,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema)
