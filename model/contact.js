const mongoose = require("mongoose");

const { Schema } = mongoose;

const constantSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  phone: {
    type: String
  },
  subject: {
    type: String
  },
  text: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Item = mongoose.model("Contact", constantSchema);
