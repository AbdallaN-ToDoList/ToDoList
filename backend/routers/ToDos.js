const express = require("express");

const { createNewToDo } = require("../controllers/ToDos");

const todosRouter = express.Router();

todosRouter.post("/", createNewToDo);

module.exports = todosRouter;
