const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["GEN", "RES"],
    default: "GEN",
    required: false,
  },
  subtitle: {
    type: String,
    default: "",
    required: false,
  },
  description: {
    type: String,
    default: "",
    required: false,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  files: {
    type: Array,
    default: [],
    required: false,
  },
  groups: {
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
    ],
    default: [],
    required: false,
  },
});

module.exports = mongoose.model("Entry", entriesSchema);
