const mongoose = require("mongoose");

const todoScema = new mongoose.Schema({
  title: { type: String },
  isCompleted: { type: Number, default: 0 },
});

module.exports = mongoose.model("Todos", todoScema);
