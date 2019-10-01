"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require("express");

var PORT = process.env.HTTP_PORT || 4001;
var app = express();
app.use(express["static"](_path["default"].join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.send("go and don't give up");
});
app.get("/flower", function (req, res) {
  res.json({
    name: "dongwon",
    feeling: "angry"
  });
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
