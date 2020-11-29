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

// const fileFilter = (req, file, cb) => {
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

const upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5,
  // },
  // fileFilter: fileFilter,
});

const handlers = require("../handlers");
const { auth } = require("../middlewares/auth");

router.route("/").get(handlers.getApp);

router.route("/").post(auth, handlers.addApp);

router.get("/user", auth, handlers.getAppUser);

router.get("/doctor", auth, handlers.getDocApp);

router
  .route("/:id")
  .get(handlers.getAApp)
  .delete(auth, handlers.deleteAppointment)
  .put(auth, handlers.approveApp);

module.exports = router;
