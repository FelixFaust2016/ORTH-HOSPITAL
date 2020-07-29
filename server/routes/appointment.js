const router = require("express").Router();

const handlers = require("../handlers");
const auth = require("../middlewares/auth");

router.route("/").get(handlers.getApp).post(auth, handlers.addApp);

router.get("/user", auth, handlers.getAppUser);

router.route("/:id").get(handlers.getAApp);

module.exports = router;
