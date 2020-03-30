var VueLoaderPlugin
 = require('vue-loader/lib/plugin')

module.exports = {
  entry: "./main.js",
  output: {
    filename: "[name].bundle.js",
    path: __dirname
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader"
        }
      },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      }
    ]
  }
}
