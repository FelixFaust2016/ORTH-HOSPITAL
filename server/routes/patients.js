const router = require("express").Router();

const handlers = require("../handlers");

router.route("/").get(handlers.getPatients)
router.route("/users").get(handlers.getUsers);

router.route("/:id").get(handlers.getAPatient)

module.exports = router;
