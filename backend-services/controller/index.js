const dotenv = require("dotenv");
dotenv.config();
let path = process.env.BUNDLE_PATH;
console.log(path)
const getScript = async (req, res) => {
  // let {id} = req.body;
  console.log("#####################");
  const js = require('fs').readFileSync(path, { encoding: "utf8" })
  // console.log(js)
  res.send(js)
}

module.exports = {getScript}