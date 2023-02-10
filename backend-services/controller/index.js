const dotenv = require("dotenv");
dotenv.config();
let path = process.env.BUNDLE_PATH;
console.log(path)
const getScript = async (req, res) => {
  // let {id} = req.body;
  console.log("#####################");
  const js = require('fs').readFileSync(path, { encoding: "utf8" })
  res.send({
    message:"success",
    success: true,
    data: js
  })
}

module.exports = {getScript}