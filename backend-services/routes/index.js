const express = require("express");
const route = express.Router();
const {getScript} = require("../controller/index");

route.post("/getscript", getScript)

module.exports = route;