const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
});

const handlers = require("../handlers");
const { auth } = require("../middlewares/auth");

router
  .route("/")
  .get(handlers.getTest)
  .post(auth, upload.single("test"), handlers.addTest);

router.get("/:id", handlers.getATest).get("/:id", handlers.getPatientTest)

module.exports = router;
