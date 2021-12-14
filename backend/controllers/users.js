const usersModul = require("../DB/modules/users");

const createNewUser = (req, res) => {
  const { firstName, lastName, email, password, isCompleted } = req.body;

  const user = new usersModul({
    firstName,
    lastName,
    email,
    password,
    isCompleted,
  });

  user
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, massage: "Success user created", user: result });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    });
};

module.exports = { createNewUser };
