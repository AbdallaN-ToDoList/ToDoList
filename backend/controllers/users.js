const usersModul = require("../DB/modules/users");
const bcrypt = require("bcrypt");

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

const updateUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const pass = await bcrypt.hash(password, 10);
  const idUser = req.params.id;

  usersModul
    .findByIdAndUpdate(
      { _id: idUser },
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: pass,
      },
      { new: true }
    )
    .then((result) => {
      res
        .status(200)
        .json({ success: true, massage: "Success user update", user: result });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, massage: "server error", err: err });
    });
};

module.exports = { createNewUser, updateUser };
