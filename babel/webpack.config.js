module.exports = {
  entry: "./main.js",
  output: {
    filename: 'bundle.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}