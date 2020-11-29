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

exports.getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.decoded;

    const user = await db.User.findById(id)
      .populate("profile")
      .populate([
        {
          path: "patient",
          model: "User",
        },
      ]);

    console.log("fnufroi" + user);
    res.status(200).json(user.profile);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  console.log("########################");
  console.log(req.file);
  console.log("#######################");
  try {
    console.log(req.body);
    const { id } = req.decoded;
    const user = await db.User.findById(id);

    // if (user.profile)
    //   return res.json("Profile already created").status(404);

    const body = {
      ...req.body,
      patient: id,
    };

    if (req.file && req.file.path) {
      body.profileImage = req.file.path;
    }

    const profile = await db.Profile.create(body);
    user.profile = profile._id;
    await user.save();

    res.status(201).json({ ...profile._doc, user: user._id });
  } catch (err) {
    err.status = 404;
    console.log(err);
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { id: userId } = req.decoded;

    console.log(req.body);
    console.log(userId);
    const profile = await db.Profile.findOneAndUpdate(
      { patient: userId },
      req.body,
      {
        new: true,
      }
    );

    return res.json(profile);
  } catch (err) {
    err.status = 404;
    console.log(err);
    next(err);
  }
};

exports.updateAProfile = async (req, res, next) => {
  try {
    const { id: profileId } = req.params;
    console.log(req.body, "...........");
    const profile = await db.Profile.findByIdAndUpdate(
      profileId,
      req.body,
      { new: true }
    );
    return res.json(profile);
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
