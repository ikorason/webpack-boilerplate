const webpack = require('webpack')
const ManifestPlugin = require('webpack-manifest-plugin')
const merge = require('webpack-merge')

const parts = require('./webpack.parts')
const common = require('./webpack.config')

const PATHS = require('./paths')

const config = merge([
  {
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
    },
    plugins: [new ManifestPlugin()],
  },
  parts.extractSASS({
    use: [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
        },
      },
      parts.autoprefix(),
      {
        loader: 'sass-loader',
      },
    ],
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: './images/[name].[hash:8].[ext]',
    },
  }),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    },
  ]),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.setFreeVariable('process.env.NODE_ENV', 'production'),
])

module.exports = env => {
  console.log('Production: ', env.production)
  process.env.BABEL_ENV = env
  console.log(env)
  console.log('process.env.NODE_ENV')
  return merge(common, config)
}
