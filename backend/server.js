const express = require("express");
const userRouter = require("./routers/users");

const app = express();
require("dotenv").config();

require("../backend/DB/db");

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`server run ${port}`);
});
