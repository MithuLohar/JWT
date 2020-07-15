const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const routes = require("./routes/router");
const apiweather = require("./index");
const PORT = 3000;
app.use(cors());
app.use(bodyparser.json());
app.use(apiweather);
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/routes", routes);
app.listen(PORT, err => {
  if (err) throw err;
  console.log(`the server is running on ${PORT}`);
});
