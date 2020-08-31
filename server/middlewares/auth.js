const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        next(Error("Failed to authenticate token"));
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    next(Error("No token Provided"));
  }
};

exports.isAdmin = (req, res, next) => {
  const { role } = req.decoded;
  if (role !== "admin") {
    const error = new Error("Forbidden. You dont have access to the resource");
    error.status = 403;
    return next(error);
  }

  next();
};

