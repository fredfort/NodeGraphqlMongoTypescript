const path = require('path')
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

const destFolder = 'build'
module.exports = {
  mode: 'production',
  target: "node",
  entry: path.join(__dirname, 'src/index.ts'),
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, destFolder),
  },
  externals: [nodeExternals()],
  module:{
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ]
  },
  plugins:[
    new CleanWebpackPlugin({path: path.join(__dirname, destFolder)}),
    new CopyPlugin([ { context:  path.join(__dirname, 'src'), from: 'schema.graphql' } ]),
  ]
}