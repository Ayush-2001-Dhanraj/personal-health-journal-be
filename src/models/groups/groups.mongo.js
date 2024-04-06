const mongoose = require("mongoose");

const groupsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Group", groupsSchema);
