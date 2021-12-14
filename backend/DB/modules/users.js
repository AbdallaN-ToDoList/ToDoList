const mongoose = require("mongoose");

const userScema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDos" }],
});

module.exports = mongoose.model("User", userScema);
