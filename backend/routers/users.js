const express = require("express");

const { createNewUser, updateUser } = require("../controllers/users");

const userRouter = express.Router();

// http://localhost:5000/user
userRouter.post("/", createNewUser);

// http://localhost:5000/user
userRouter.put("/:id", updateUser);

module.exports = userRouter;
