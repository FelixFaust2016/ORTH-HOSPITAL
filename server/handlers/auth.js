const db = require("../models");

exports.register = async (req, res, next) => {
  try { 
    const user = await db.User.create(req.body);
    const { id, firstname, lastname, email } = user;

    res.json({ id, firstname, lastname, email });
  } catch (err) {
    // if (err.code === 11000) {
    //   err.message = "Sorry, that email is already taken";
    // }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const user = await db.User.findOne({ email: req.body.email });
    const { id, firstname, lastname, email } = user;
    const valid = await user.comparePassword(req.body.password);
    if (valid) {
      res.json({
        id,
        firstname,
        lastname,
        email
      });
    } else {
      throw new Erro("Invalid email or Password");
    }
  } catch (err) {}
};
