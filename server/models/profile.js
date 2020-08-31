const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  age: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Date,
    default: Date.now(),
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  nextOffKinPhoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  nextOffKinAddress: {
    type: String,
    required: true,
  },
  genotype: {
    type: String,
    enum: ["aa", "as", "ss"],
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["a", "ab", "b", "o-", "o+"],
    required: true,
  },
  prevIllness: {
    type: String,
    default: "none",
  },
  currentIllness: {
    type: String,
    default: "none",
  },
  prevMedication: {
    type: String,
    default: "none",
  },
  currentMedication: {
    type: String,
    default: "none",
  },
  prevDoctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
  },
  country: {
    type: String,
    default: "none",
  },
  state: {
    type: String,
    default: "none",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  profileImage: {
    type: String
  }
});

module.exports = mongoose.model("Profile", profileSchema);
