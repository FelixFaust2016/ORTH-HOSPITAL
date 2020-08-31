const jwt = require("jsonwebtoken");

const db = require("../models");

exports.register = async (req, res, next) => {
  try {
    const user = await db.User.create(req.body);
    const { id, firstname, lastname, email, role } = user;

    const token = jwt.sign(
      { id, firstname, lastname, email, role },
      process.env.SECRET
    );

    res.status(200).json({ id, firstname, lastname, email, token, role });
  } catch (err) {
    if (err.code === 11000) {
      err.message = "Sorry, that email is already taken";
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ email: req.body.email });
    const { id, firstname, lastname, email, role } = user;
    const valid = await user.comparePassword(req.body.password);
    if (valid) {
      const token = jwt.sign(
        { id, firstname, lastname, email, role },
        process.env.SECRET
      );

      res.json({
        id,
        firstname,
        lastname,
        email,
        token,
        role,
      });
    } else {
      throw new Error();
    }
  } catch (err) {
    err.message = "Invalid Email or Password";
    next(err);
  }
};
