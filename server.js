const express = require("express");
const app = express();
const mongoose  = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");


// accessing config folder
require("dotenv").config({path: "./config/.env"});

// connecting to database
connectDB();

// passport config
require("./config/passport")(passport);

// EJS
app.set("view engine", "ejs");

// static folder CSS and JS
app.use(express.static("public"));

// lbody parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// logging
app.use(logger("dev"));

// method override
app.use(methodOverride("_method"));

// Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// express flash
app.use(flash());

// Server notification
app.listen(process.env.PORT, () => {
    console.log("Server is up and running")
});

// Router setup
app.use("/", mainRoutes);
