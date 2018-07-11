const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin =  require('extract-text-webpack-plugin')//抽离打包
const HtmlWebpackPlugin = require('html-webpack-plugin');//针对html文件的打包
const CopyWebPackPlugin = require('copy-webpack-plugin');
console.log(path.resolve(__dirname, 'dist'))
module.exports = {
  entry: './src/index.js',//入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//定位项目输出目录路径
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,//匹配.js为后缀的文件
        include: [
          path.resolve(__dirname, 'src')//只会在src目录下进行匹配
        ],
        use: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
         test: /\.(png|jpg|gif)$/,
         use: [
          {
            loader: 'file-loader'//根据文件地址加载文件
          }
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },
  resolve: {
    alias: {
      utils: path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.json', '.css', '.less']//指定哪些文件处于项目模块匹配的目标
  },
  plugins: [//插件、进行目标文件的抽离等编辑操作
    new HtmlWebpackPlugin({
      file: 'index.html',
      template: 'src/index.html'//目标模版文件
    }),
    new ExtractTextPlugin('[name].css'),
    new CopyWebPackPlugin([
      {
        from: 'src/assets/favicon.ico',
        to: 'favicon.ico'
      }
    ]),
    new webpack.ProvidePlugin({
      '_': 'lodash'
      //lodash 作为工具， 是很多组件会使用的，省去了到处的import
    })
  ],
  devServer: {
    port: '1314',
    before(app) {
      app.get('/api/test.json', (req, res) => {//创造一个路由，路由地址为test.json
        res.json({
          code: 200,
          message: 'hello world'
        })
      })
    }
  }
}