const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host,
    port,
    overlay: {
      errors: true,
      warnings: true,
    },
    contentBase: path.join(__dirname, 'public'),
  },
})

exports.loadSASS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include,
        exclude,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
})

exports.extractSASS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: './styles/[name].[contenthash:8].css',
  })
  return {
    module: {
      rules: [
        {
          test: /\.(sass|scss)$/,
          include,
          exclude,
          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  }
}

exports.autoprefix = () => ({
  loader: 'postcss-loader',
})

exports.loadJavaScript = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        include,
        exclude,
        use: 'babel-loader',
      },
    ],
  },
})

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
})

exports.loadFonts = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        include,
        exclude,
        use: {
          loader: 'file-loader',
          options,
        },
      },
    ],
  },
})

exports.extractBundles = bundles => ({
  plugins: bundles.map(bundle => new webpack.optimize.CommonsChunkPlugin(bundle)),
})

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
})

exports.clean = path => ({
  plugins: [new CleanWebpackPlugin([path])],
})

exports.minifyJavaScript = () => ({
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
})

exports.setFreeVariable = (key, value) => {
  const env = {}
  env[key] = JSON.stringify(value)
  return {
    plugins: [new webpack.DefinePlugin(env)],
  }
}
