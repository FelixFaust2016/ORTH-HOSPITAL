const router = require("express").Router();

const handlers = require("../handlers");

router.get("/", handlers.getPatients);
router.get("/users", handlers.getUsers);

router.get("/:id", handlers.getAPatient);
router.put("/:id", handlers.statusUpdate);

module.exports = router;
