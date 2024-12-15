const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  getUserProfile,
} = require("../controllers/UserController.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);
router.get("/profile", getUserProfile);

module.exports = router;
