const todosModul = require("../DB/modules/ToDos");

const createNewToDo = (req, res) => {
  const { title, isCompleted } = req.body;

  const todo = new todosModul({
    title,
    isCompleted,
  });

  todo
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        massage: "Success To Do created",
        todo: result,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    });
};

const getAllToDos = (req, res) => {
  todosModul
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        massage: "all the todos",
        allTheTodos: result,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    });
};

const updateToDos = (req, res) => {
  const id = req.params.id;

  todosModul
    .findByIdAndUpdate({ _id: id }, req.body, { new: true })
    .then((result) => {
      res.status(201).json({
        success: true,
        massage: "Success ToDo update",
        updatedTodos: result,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    });
};

module.exports = { createNewToDo, getAllToDos, updateToDos };
