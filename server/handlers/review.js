const db = require("../models");

exports.getReviews = async (req, res, next) => {
  try {
    const review = await db.Review.find();
    res.status(200).json(review);
  } catch (err) {
    err.status(404);
    next(err);
  }
};

exports.addReview = async (req, res, next) => {
  try {
    console.log(req.decoded);
    const { id } = req.decoded;
    const doctor = await db.Doctor.findById(id);
    const user = await db.User.findById(id);
    const doctorInfo = await db.Doctor.findById(req.body.doctorInfoId);
    if (!doctorInfo) return res.json("Could not find the Id").status(404);

    const { reviewe } = req.body;
    const review = await db.Review.create({
      doctorInfo: {
        ...doctorInfo,
      },
      reviewe,
      user,
    });
    doctor.reviews.push(review._id);
    await doctor.save();

    res.status(201).json({ ...review._doc, doctor: doctor._id }); 
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
