var webpack = require('webpack');
var config = {
  entry: ['./src/components/app.jsx'],
  output: {
    path: __dirname + '/dist/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
      { test: /\.jsx$/, loaders: ['babel'], exclude: /node_modules/}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {'NODE_ENV': JSON.stringify('development')}
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = config;
