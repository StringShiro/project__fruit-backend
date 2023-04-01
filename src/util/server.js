if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Importing Libraies that we installed using npm
const express = require("express");
const app = express();

const bcrypt = require("bcrypt"); // Importing bcrypt package
const passport = require("passport");
const initializePassport = require("./passport-config");
// const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const path = require("path");
const temp_path = path.join(__dirname, "./src/views");

//use engine
app.set("view engine", "hbs");
app.set("views", temp_path);
app.use(express.urlencoded({extended: false}));

initializePassport(
  passport,
  (email) => users.find((user) => user.email === email),
  (id) => users.find((user) => user.id === id)
);

const users = [];

app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // We wont resave the session variable if nothing is changed
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));

// Configuring the register post functionality
app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

// Configuring the register post functionality
app.post("/register", checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      //id: Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    console.log(users); // Display newly registered in the console
    res.redirect("/login");
  } catch (e) {
    console.log(e);
    res.redirect("/register");
  }
});

// Routes
app.get("/", checkAuthenticated, (req, res) => {
  res.render("dashboard", { name: req.user.name });
});

app.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("adminLogin");
});

app.get("/register", checkNotAuthenticated, (req, res) => {
  res.render("register");
});
app.get("/dashboard", checkAuthenticated, (req, res) => {
  res.render("dashboard");
});
// End Routes

// app.delete('/logout', (req, res) => {
//     req.logOut()
//     res.redirect('/login')
//   })

app.delete("/admin-logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return next(err);
    res.redirect("/");
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/");
  }
  next();
}

app.listen(3000, () =>{
    console.log("Server is listen at port 3000");
});
//module.exports = (server);
