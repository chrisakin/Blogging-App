// password: DEqkdULaIBbvwsJM
// username: chris

const mongoose = require('mongoose');
require("../api/models/Article");

var uri = "mongodb+srv://chris:DEqkdULaIBbvwsJM@cluster0-wbocy.mongodb.net/test?retryWrites=true&w=majority";

const options = {
    reconnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true
};

mongoose.connect(uri, options).then(() =>{
    console.log('Database connection established!');
})
.catch((error) => {
        console.log('Error connecting to Database');
        console.error(error);
}
);
