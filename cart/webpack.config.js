const path = require('path');

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'auto'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fullySpecified: false
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    port: 3001,
    historyApiFallback: true
  }
};

