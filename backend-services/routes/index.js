const express = require("express");
const route = express.Router();
const {getScript} = require("../controller/index");

route.get("/getscript", getScript)

module.exports = route;