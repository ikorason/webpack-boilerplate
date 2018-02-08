const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const parts = require('./webpack.parts')

const PATHS = require('./paths')

const config = merge([
  {
    entry: {
      app: PATHS.src,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        // template: './public/index.html',
        template: path.join(__dirname, '/public/index.html'),
      }),
      new webpack.NamedModulesPlugin(),
    ],
  },
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]',
      outputPath: 'fonts/',
      publicPath: __dirname,
    },
  }),
  parts.loadJavaScript({ include: PATHS.src, exclude: /node_modules/ }),
])

module.exports = config
