const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);