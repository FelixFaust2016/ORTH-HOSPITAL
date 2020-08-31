const db = require("../models");

exports.getProfile = async (req, res, next) => {
  try {
    const profile = await db.Profile.find().populate("user", [
      "firstname",
      "lastname",
      "id",
    ]);
    res.status(200).json(profile);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    const { id } = req.decoded;
    const user = await db.User.findById(id);
    const doctor = await db.Doctor.findById(req.body.doctorId);
    if (!doctor) return res.json("Could not find Id").status(404);
    if (user.profile.length > 0) return res.json("Profile already created").status(404)

    const profile = await db.Profile.create({
      ...req.body,
      patient: id,
      profileImage: req.file.path,
    });
    user.profile.push(profile._id);
    await user.save();

    res.status(201).json({ ...profile._doc, user: user._id });
  } catch (err) {
    err.status(404);
    next(err);
  }
};
