const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "doctor", "patient", "lab"],
    default: "patient",
  },
  status: {
    type: String, 
    enum: ["in-patient", "out-patient"],
    default: "out-patient"
  },
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Appointment" }],
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile"
  },
  tests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Test" }],
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
module.exports.userSchema = userSchema;
