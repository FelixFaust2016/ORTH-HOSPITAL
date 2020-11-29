const router = require("express").Router();
const multer = require("multer");
const { updateAProfile } = require("../handlers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
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
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

const handlers = require("../handlers");
const { auth } = require("../middlewares/auth");

// router.route("/").get(handlers.getProfile).post(handlers.addProfile);
router.get("/", handlers.getProfile);

router.post("/", auth, upload.single("profileImage"), handlers.addProfile);
router.put("/", auth, handlers.updateProfile);

router.put("/:id", auth, handlers.updateAProfile);

router.get("/user", auth, handlers.getUserProfile);

module.exports = router;
