const db = require("../models");
const { populate } = require("../models/appiontment");
const appiontment = require("../models/appiontment");

exports.getApp = async (req, res, next) => {
  try {
    const appointment = await db.Appointment.find()
      .populate({
        path: "user",
        select: "firstname lastname email id",
        populate: "profile",
      })
      .populate({
        path: "doctor",
        populate: {
          path: "user",
          select: "firstname lastname id",
        },
      });

    console.log(appointment);
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
    // const doctorId = await db.Doctor.findById(id);
    const { subject, date, time, isApproved, comment } = req.body;

    const appointment = await db.Appointment.create({
      doctor: req.body.doctorId,
      subject,
      date,
      time,
      id,
      isApproved,
      comment,
      user,
    });

    user.appointments.push(appointment._id);
    // doctorId.appointments.push(appointment._id);
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

    const user = await db.User.findById(id).populate({
      path: "appointments",
      populate: "doctor",
      populate: { path: "doctor", populate: "user" },
    });
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

    const appointment = await db.Appointment.findById(id)
      .populate({
        path: "user",
        select: "email id firstname lastname",
        populate: "profile",
      })
      .populate({
        path: "doctor",
        populate: "user",
      });

    if (!appointment) throw new Error("No appointment found");

    res.status(200).json(appointment);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getDocApp = async (req, res, next) => {
  try {
    const { id } = req.decoded;

    const doctor = await db.Doctor.findOne({ user: id });

    const appointment = await db.Appointment.find({
      doctor: doctor._id,
    }).populate({
      path: "user",
      select: "firstname lastname email id",
      populate: "profile",
    });

    res.status(200).json(appointment);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

//deleting appointment
exports.deleteAppointment = async (req, res, next) => {
  try {
    const { id: appointmentId } = req.params;
    const { id: userId } = req.decoded;

    const appointment = await db.Appointment.findById(appointmentId);
    if (!appointment) throw new Error("No appointment found");
    if (appointment.user.toString() !== userId) {
      throw new Error("Unauthorized access");
    }

    await appointment.remove();
    res.status(202).json(appointment);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.approveApp = async (req, res, next) => {
  try {
    const { id: appointmentId } = req.params;
    console.log(req.body, "...........");
    const appointment = await db.Appointment.findByIdAndUpdate(
      appointmentId,
      req.body,
      { new: true }
    );
    return res.json(appointment);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
