const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.use("/apisearch", (req, res) => {
  let city = "delhi";
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4fe6b12e8072edb85cbf93e83faa58bd`
  )
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
    
});
module.exports = router;
