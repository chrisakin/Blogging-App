// Creation of our data Schema to arrange our data in the way we want it o be arranged in the front end app
'use strict';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: String,
  tag: {
    type: String,
    enum: ['POLITICS', 'ECONOMY', 'EDUCATION','STORY','TECH']
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
 photo: {
  type: String,
  required: true
}
});

module.exports = mongoose.model("ArticleModel", BlogSchema);

