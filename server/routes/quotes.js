const router = require("express").Router();

const handlers = require("../handlers")

router
  .route("/")
  .get(handlers.getQuotes)
  .post(handlers.addQuote);

module.exports = router;
