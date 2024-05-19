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
  hospitalName: {
    type: String,
    default: "",
    required: false,
  },
  doctorName: {
    type: String,
    default: "",
    required: false,
  },
  department: {
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
  isRecurring: {
    type: Boolean,
    default: false,
  },
  repeatFrequency: {
    type: String,
    enum: ["DAILY", "WEEKLY", "MONTHLY"],
  },
  recurringStartDate: { type: Date },
  isTestAwaited: { type: Boolean, default: false },
  testResultDate: { type: Date },
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
