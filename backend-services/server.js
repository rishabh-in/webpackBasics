const server = require("./index");
let PORT = process.env.PORT || 5000
server.listen(process.env.PORT, () => {
  console.log( `Server started running on port ${PORT}.`)
})