const express = require("express");
const passport = require("passport");
const { getLoginPage, getProfilePage, logout } = require("../controllers/authController");

const router = express.Router();

// Login page
router.get("/", getLoginPage);

// Google authentication
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google authentication callback
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

// Profile page
router.get("/profile", getProfilePage);

// Logout
router.get("/logout", logout);

module.exports = router;
