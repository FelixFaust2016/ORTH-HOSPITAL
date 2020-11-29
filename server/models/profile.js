const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
    // required: true,
  },
  bloodGroup: {
    type: String,
    enum: ["a", "ab", "b", "o-", "o+"],
    // required: true,
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
    type: String,
  },
  country: {
    type: String,
    default: "none",
  },
  region: {
    type: String,
    default: "none",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  profileImage: {
    type: String,
  },
  weight: {
    type: String,
  },
  height: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("Profile", profileSchema);
