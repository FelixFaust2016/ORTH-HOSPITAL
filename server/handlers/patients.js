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
    const patient = await db.User.find({ role: "patient" }).populate("profile");

    res.status(200).json(patient);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.getAPatient = async (req, res, next) => {
  try {

    const { id } = req.params;

    const patient = await db.User.findById(id).populate("profile");

    res.status(200).json(patient);
  } catch (err) {
    err.status(404);
    next(err);
  }
};
