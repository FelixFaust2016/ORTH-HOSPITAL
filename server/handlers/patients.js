const db = require("../models");

exports.getUsers = async (req, res, next) => {
  try {
    const patient = await db.User.find().populate("profile");

    res.status(200).json(patient);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.getPatients = async (req, res, next) => {
  try {
    const patient = await db.User.find({ role: "patient" })
      .populate("profile")
      .populate("tests");

    res.status(200).json(patient);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.statusUpdate = async (req, res, next) => {
  try {
    const { id: patientsId } = req.params;
    console.log(req.body, "...........");
    const patient = await db.User.findByIdAndUpdate(
      patientsId,
      req.body,
      { new: true }
    );
    return res.json(patient);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getAPatient = async (req, res, next) => {
  try {
    const { id } = req.params;

    const patient = await db.User.findById(id)
      .populate("profile")
      .populate("tests");

    if (!patient) throw new Error("No doctor found");

    res.status(200).json(patient);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
