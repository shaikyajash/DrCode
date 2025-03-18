require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});