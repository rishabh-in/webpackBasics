const path = require("path");

module.exports = {
  mode: 'development',
  entry: "./src/methods.js",
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "methods",
    libraryTarget: "window",
    libraryExport: "default"
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "all"
  //   }
  // },
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      }
    ]
  }
}