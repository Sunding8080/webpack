# css预处理语言

## loader
webpack.config.js文件中，loaders执行顺序从后往前：先执行stylus-loader/sass-loader/less-loader等，将.scss/.styl/.less转成css文件，再用css-loader执行解析@import和url()和.css文件，style-loader创建并添加包含了解析样式的style标签
```
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
```
