const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  subject: {
    type: String,
    required: true,
  },
  isApproved: {
    type: String,
    enum: ["canceled", "pending", "approved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
