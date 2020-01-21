module.exports = {
  entry: "./main.js",
  output: {
    filename: "[name].bundle.js",
    path: __dirname
  },
  
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader' ,'sass-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  }
}