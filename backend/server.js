const express = require("express");

const app = express();

require("../backend/DB/db");

const port = 5000;

app.listen(port, () => {
  console.log(`server run ${port}`);
});
