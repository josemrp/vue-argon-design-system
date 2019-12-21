const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Vue Argon Design',
    themeColor: '#172b4d',
    msTileColor: '#172b4d',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#172b4d'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/argon-design-system/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    dashboard: {
      entry: 'src/argon-dashboard/main.js',
      template: 'public/dashboard.html',
      filename: 'dashboard.html',
      chunks: ['chunk-vendors', 'chunk-common', 'dashboard']
    }
  },
  // Hot reload
  devServer: {
    watchOptions: {
      poll: true
    }
  }
};
