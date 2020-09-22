const router = require("express").Router();

const handlers = require("../handlers");
const { auth } = require("../middlewares/auth");

router.route("/").get(handlers.getApp).post(auth, handlers.addApp);

router.get("/user", auth, handlers.getAppUser);

router.get("/doctor", auth, handlers.getDocApp)

router
  .route("/:id")
  .get(handlers.getAApp)
  .delete(auth, handlers.deleteAppointment);

module.exports = router;
