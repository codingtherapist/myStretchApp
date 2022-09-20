const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const router = express.Router()
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));



// Setup Sessions - stored in MongoDB
/*app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );*/

// middleware
app.set('view engine', 'ejs') //helps parse ejs
app.use(express.static('public') ) //tells where to go for static files HTML/CSS
app.use(express.urlencoded ( {extended:true} ) ) //how to handle URLs
app.use(express.json() ) //allows use of JSON for objects
app.use(cors() )
 //prevent cross object requests
 
 
// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());

//Setup Routes For Which The Server Is Listening
app.use("/", mainRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);


//server running
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running, yay!` )
})