const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userScema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isCompleted: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDos" }],
});

userScema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userScema);
