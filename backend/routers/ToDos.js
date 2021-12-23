const express = require("express");

const {
  createNewToDo,
  getAllToDos,
  updateToDos,
  deleteToDo,
} = require("../controllers/ToDos");

const todosRouter = express.Router();

todosRouter.post("/", createNewToDo);
todosRouter.get("/", getAllToDos);
todosRouter.put("/:id", updateToDos);
todosRouter.delete("/:id", deleteToDo);

module.exports = todosRouter;
