const express = require("express");
const router = express.Router();
const axios = require("axios");
const moongoose = require("mongoose");
const RegisterModel = require("../model/user");
const Jwt = require("jsonwebtoken");
const weatherapi =
  "http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4fe6b12e8072edb85cbf93e83faa58bd";
const coinlayerapi =
  "http://api.coinlayer.com/live?access_key=281390a86d9c46a41859b98a868ef623";
var url =
  "mongodb+srv://mithulohar:7070596630@cluster0-tsdwe.mongodb.net/test?retryWrites=true&w=majority";
const coinlayerdetailapi =
  "http://api.coinlayer.com/list?access_key=281390a86d9c46a41859b98a868ef623";

moongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  err => {
    if (err) {
      throw err;
    }
    console.log("database is connected");
  }
);

router.use("/register", (req, res) => {
  // var registerdata = {
  //   firstname: "Stryker01",
  //   lastname: "yureka09",
  //   email: "strykermithu@gmail.com",
  //   password: "Stryker09090908"
  // };
  var registerdata = req.body;
  var register = new RegisterModel(registerdata);
  register.save(err => {
    if (err) {
      console.log(err);
    }
    console.log(register);
    let payload = register.email;
    let token = Jwt.sign(payload, "myKey");
    res.send({ token });
  });
});

router.use("/login", (req, res) => {
  // let useremail = "strykermithu@gmail";
  // let pass = "Stryker090909";
  let data = req.body;
  let useremail = data.email;
  let pass = data.password;
  console.log(useremail);
  console.log(pass);
  RegisterModel.findOne({ email: useremail }, (err, user) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!user) {
      res.status(402).send("No mail found with this mail");
      return;
    }
    if (user.password != pass) {
      res.status(401).send("wrong password");
      return;
    }

    let payload = { subject: user._id };
    let token = Jwt.sign(payload, "myKey");
    console.log(token);
    res.send({ token });
  });
});
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("unauthorized request");
  }
  let payload = Jwt.verify(token, "myKey");

  if (!payload) {
    return res.status(401).send("unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.get("/home", verifyToken, (req, res) => {
  axios
    .get(coinlayerdetailapi)
    .then(data => {
      var rates = data.data.crypto;
      rates = rates;

      convertToArray(rates, function(response) {
        res.json(response);
      });
    })
    .catch(err => {
      console.log(err);
      res.json(err);
    });
});
const convertToArray = (rates, callback) => {
  var keys = Object.keys(rates);
  var values = Object.values(rates);
  var data = [{ key: "", val: {} }];

  keys.forEach((element, i) => {
    var item = { key: element, val: values[i] };
    data.push(item);

    if (i == keys.length - 1) {
      callback(data);
    }
  });
};
router.get("/coinlayer", (req, res) => {
  axios.get(coinlayerdetailapi).then(data => {
    var rates = data.data.crypto;
    convertToArray1(rates, response => {
      res.json(response);
    });
    res.json(rates.crypto);
  });
});
const convertToArray1 = (rates, callback) => {
  var key = Object.keys(rates);
  var values = Object.values(rates);
  var data = [{ key: "", val: {} }];

  key.forEach((ele, i) => {
    var item = { key: ele, val: values[i] };
    data.push(item);
    if (i == key.length - 1) {
      callback(data);
    }
  });
};
module.exports = router;
