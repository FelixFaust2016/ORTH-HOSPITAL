const db = require("../models");
const multer = require("multer")

exports.getDoctor = async (req, res, next) => {
  try {
    const doctor = await db.Doctor.find();
    res.status(200).json(doctor);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addDoctor = async (req, res, next) => {
  try {
    const category = await db.Category.findById(req.body.categoryId);
    if (!category) return res.json("Could not find Id").status(404);

    let doctor = new db.Doctor({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      category: {
        _id: category._id,
        name: category.name,
        pic: category.pic
      },
      productImage: req.file.path,
      phoneNumber: req.body.phoneNumber,
      rating: req.body.rating
    });
    doctor = await doctor.save();
    res.json(doctor).status(200);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getADoctor = async(req, res, next) => {
  try {
    const { id } = req.params;

    const doctor = await db.Doctor.findById(id)

    if (!doctor) throw new Error("No doctor found");

    res.status(200).json(doctor);
  } catch (err) {
    err.status = 400;
    next(err);
  }
}

// exports.deleteDoctor = async(req, res, next) => {

// }
