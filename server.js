const express = require('express')
const app = express()
const cors = require('cors')
//const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
//const router = express.Router()
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

/*
//original
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myStretchApp';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  // the following code examples can be pasted here...
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


app.get('/', async (request, response) => {
    try {
        response.sendFile( __dirname + "/public/index.html")
    } catch (error) {
        response.status(500).send({message: error.message})
    }
})

*/

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


 //Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "mybooLean",
      resave: false,
      saveUninitialized: false,
      //store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  );

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