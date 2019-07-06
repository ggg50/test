
const path = require('path')
module.exports = {
    entry:  './src/js/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'dist'), // 必须使用绝对地址，输出文件夹
      filename: "bundle.js" // 打包后输出文件的文件名
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
        test: /\.scss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            {loader: "css-loader", options: { importLoaders: 1 }},
            "postcss-loader",
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }
      ],
    }
  }
