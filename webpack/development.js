import shared from './shared'
import webpack from 'webpack'

export default {
  ...shared,
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server',
    ...shared.entry,
  ],
  output: {
    filename: 'app.js',
    path: __dirname,
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
}
