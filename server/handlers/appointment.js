const db = require("../models");

exports.getApp = async (req, res, next) => {
  try {
    const appointment = await db.Appointment.find();
    res.status(200).json(appointment);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addApp = async (req, res, next) => {
  try {
    console.log(req.decoded);
    const { id } = req.decoded;
    const user = await db.User.findById(id);
    const doctor = await db.Doctor.findById(req.body.doctorId);
    if (!doctor) return res.json("Could not find Id").status(404);

    const { subject, duration, isApproved } = req.body;
    const appointment = await db.Appointment.create({
      doctor: {
        ...doctor,
      },
      subject,
      duration,
      user,
      isApproved,
    });
    user.appointments.push(appointment._id);
    await user.save();

    res.status(201).json({ ...appointment._doc, user: user._id });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

//getting a specific appointment
exports.getAppUser = async (req, res, next) => {
  try {
    const { id } = req.decoded;

    const user = await db.User.findById(id).populate("appointments");

    res.status(200).json(user.appointments);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

//getting a specific poll
exports.getAApp = async (req, res, next) => {
  try {
    const { id } = req.params;

    const appointment = await db.Appointment.findById(id).populate("user", [
      "email",
      "id",
    ]);

    if (!appointment) throw new Error("No appointment found");

    res.status(200).json(appointment);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
