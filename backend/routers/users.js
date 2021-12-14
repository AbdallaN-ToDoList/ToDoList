const express = require("express");

const { createNewUser } = require("../controllers/users");

const userRouter = express.Router();

// http://localhost:5000/user
userRouter.post("/", createNewUser);

module.exports = userRouter;
