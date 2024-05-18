const mongoose = require("mongoose");

const entriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["TES", "GEN", "VIS"],
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
  file: {
    type: String,
    default: "",
    required: false,
  },
  groups: {
    type: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Group", required: true },
    ],
    default: [],
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Entry", entriesSchema);
