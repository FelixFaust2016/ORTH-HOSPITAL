const db = require("../models");

exports.getTest = async (req, res, next) => {
  try {
    const test = await db.Test.find();

    res.status(200).json(test);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.getATest = async (req, res, next) => {
  try {
    const { id } = req.params;

    const test = await db.Test.findById(id)

    if (!test) throw new Error("No test found");

    res.status(200).json(test);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.getPatientTest = async (req, res, next)=> {
  try {
    const {patient} = req.params;

    const test = await db.Test.findById(patient)

    if (!test) throw new Error("No test found");

    res.status(200).json(test);
  } catch (err) {
    err.status = 400;
    next(err)
  }
}

exports.addTest = async (req, res, next) => {
  try {
    console.log(req.decoded);
    const { id } = req.decoded;
    let user = await db.User.findById(id);
    // const doctorId = await db.Doctor.findById(id);

    const { name } = req.body;
    const test = await db.Test.create({
      patient: req.body.patientId,
      name,
      test: req.file.path,
    });
    user = await db.User.findById(req.body.patientId);
    console.log(user, "+++++++++++++++++++++++");
    user.tests.push(test._id);
    await user.save();

    res.status(201).json({ ...test._doc, user: user._id });
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

