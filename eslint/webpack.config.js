module.exports = {
  entry: "./main.js",
  output: {
    filename: "[name].bundle.js",
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "eslint-loader"
        }
      }
    ]
  }
}
