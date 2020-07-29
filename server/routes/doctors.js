const router = require("express").Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

const db = require("../models");
const handlers = require("../handlers");

router.route("/").get(handlers.getDoctor);

router.post("/", upload.single("productImage"), handlers.addDoctor);

router
  .route("/:id")
  .get(handlers.getADoctor)
  // .delete(handle.deleteDoctor)

module.exports = router;
