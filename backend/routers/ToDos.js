const express = require("express");

const { createNewToDo, getAllToDos } = require("../controllers/ToDos");

const todosRouter = express.Router();

todosRouter.post("/", createNewToDo);
todosRouter.get("/", getAllToDos);

module.exports = todosRouter;
