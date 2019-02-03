const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const cssPlugin = new MiniCssExtractPlugin({
    filename: '[name].css'
  });

module.exports = {
  context: path.resolve(__dirname),
  entry: {
      main: ['./src/index.js', './src/css/main.css'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }, 
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            { loader: 'css-loader' },
            { loader: 'postcss-loader' }
        ]
      },
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
      htmlPlugin, 
      cssPlugin
    ]
};