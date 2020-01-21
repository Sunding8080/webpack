# postcss demo

##  package
css-loader：解析css文件中的@import和url()，在js中通过import/require()引入css  
style-loader：创建style标签，将样式注入dom  
autoprefixer：补全css前缀  
postcss-import：补全引入的使用@import引入另外的css文件的前缀  
url-loader：将文件转成base64格式的文件  
file-loader：将require()/import解析成url并输出

## postcss.config.js
插件执行顺便从前往后，postcss-import结合postcss使用，解析css文件中的@import，然后autoprefixer补全前缀
```
plugins: {
  "postcss-import": {},
  autoprefixer: {}
}
```

## loader
webpack.config.js文件中，loaders执行顺序从后往前：先执行postcss-loader，本案例是全补前缀，css-loader执行解析@import和url()，style-loader创建并添加包含了解析样式的style标签
```
{
  test: /\.css$/,
  use: ['style-loader', 'css-loader', 'postcss-loader']
}
```

url-loader 小于8192B，会被解压成base64，大于等于8192B，调用默认的file-loader，输出成文件，不进行压缩
```
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use: {
    loader: 'url-loader',
    options: {
      limit: 8192
    }
  }
}
```