const router = require("express").Router();

const handlers = require("../handlers");
const { auth } = require("../middlewares/auth");

router.route("/").get(handlers.getReviews).post(auth, handlers.addReview);

module.exports = router;
