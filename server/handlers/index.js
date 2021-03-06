module.exports = {
  ...require("./auth"),
  ...require("./doctors"),
  ...require("./category"),
  ...require("./appointment"),
  ...require("./quotes"),
  ...require("./review"),
  ...require("./profile"),
  ...require("./patients"),
  ...require("./lab")
};

module.exports.notFound = (req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;

  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Something went wrong",
  });
};
