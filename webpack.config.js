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
        template: './public/index.html',
      }),
    ],
  },
  parts.loadFonts({
    options: {
      name: './fonts/[name].[hash:8].[ext]',
    },
  }),
  parts.loadJavaScript({ include: PATHS.src, exclude: /node_modules/ }),
])

module.exports = config
