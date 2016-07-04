import webpack from 'webpack'

export default {
  devtool: 'source-map',
  entry: [
    './src',
  ],
  module: {
    loaders: [{
      include: /src/,
      loader: 'babel',
      test: /\.js$/,
    },{
      include: /src/,
      loader: 'style-loader!css-loader?modules',
      test: /\.css$/,
    }],
  },
  plugins: [
    new webpack.ProvidePlugin({
      preact: 'preact',
    }),
  ],
}
