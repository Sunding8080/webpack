const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
resolve = (url) => path.resolve(__dirname, url)

module.exports = {
  mode: "production",
  entry: "./main.js",
  output: {
    filename: '[name].bundle.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
  }
}
