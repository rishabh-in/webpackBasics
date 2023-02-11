const app = require("express")();
const dotenv = require("dotenv");
const Routes = require("./routes/index.js")
dotenv.config();
app.use("/api", Routes)
module.exports = app;