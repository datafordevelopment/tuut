import CompressionPlugin from 'compression-webpack-plugin'
import shared from './shared'
import webpack from 'webpack'

export default {
  ...shared,
  output: {
    filename: './build/app.js',
    sourceMapFilename: './build/app.js.map',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
      },
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz',
    }),
  ],
}
