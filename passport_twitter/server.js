
'use strict'

const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');

// db instance connection
require("./config/db");

// ceate an express application
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;


app.get('/success', (req, res) => res.send("You have successfully logged in"));
app.get('/error', (req, res) => res.send("error logging in"));

// passport setup
const passport = require('passport');

// Authentication configuration
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla' 
  }))
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport); 


// API ENDPOINTS
var routes = require('./api/routes/route'); //importing route
routes(app,passport);

// LISTENING
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//https://pacific-citadel-64383.herokuapp.com
