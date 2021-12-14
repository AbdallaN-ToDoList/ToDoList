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
      res
        .status(201)
        .json({
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

module.exports = { createNewToDo };
