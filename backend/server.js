const express = require("express");
const todosRouter = require("./routers/ToDos");
const userRouter = require("./routers/users");

const app = express();
require("dotenv").config();

require("../backend/DB/db");

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/user", userRouter);
app.use("/todo", todosRouter);

app.listen(port, () => {
  console.log(`server run ${port}`);
});
