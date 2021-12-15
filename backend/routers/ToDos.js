const express = require("express");

const {
  createNewToDo,
  getAllToDos,
  updateToDos,
} = require("../controllers/ToDos");

const todosRouter = express.Router();

todosRouter.post("/", createNewToDo);
todosRouter.get("/", getAllToDos);
todosRouter.put("/:id", updateToDos);

module.exports = todosRouter;
