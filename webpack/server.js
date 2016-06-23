import WebpackDevServer from 'webpack-dev-server'
import config from './development'
import express from 'express'
import webpack from 'webpack'

const server = new WebpackDevServer(webpack(config), {
  hot: true,
  noInfo: false,
  publicPath: config.output.publicPath,
  quiet: false,
  stats: {
    assets: false,
    chunks: false,
    chunkModules: false,
    hash: false,
    version: false,
  },
})

server.listen(3000, 'localhost', err => {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
