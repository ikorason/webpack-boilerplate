const merge = require('webpack-merge')
require('dotenv').config()

const common = require('./webpack.config')
const parts = require('./webpack.parts')

const config = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.DEV_PORT,
  }),
  parts.loadSASS(),
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  parts.loadImages(),
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
])

module.exports = env => {
  console.log('Development => ', env.development)
  process.env.BABEL_ENV = env
  return merge(common, config)
}
