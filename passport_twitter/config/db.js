
`javascript`
const mongoose = require("mongoose");

var uri = "mongodb+srv://chris:DEqkdULaIBbvwsJM@cluster0-wbocy.mongodb.net/test?retryWrites=true&w=majority";

  const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10
  };

  mongoose.connect(uri, options).then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

// require any models

require("../api/models/userModel");