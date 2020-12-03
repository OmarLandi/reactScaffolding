const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: path.resolve(__dirname, "src/app"),
      components: path.resolve(__dirname, "src/common/components"),
      containers: path.resolve(__dirname, "src/common/containers"),
      layouts: path.resolve(__dirname, "src/common/layouts"),
      assets: path.resolve(__dirname, "src/assets"),
      config: path.resolve(__dirname, "src/config"),
      redux: path.resolve(__dirname, "src/redux"),
      utils: path.resolve(__dirname, "src/utils"),
      router: path.resolve(__dirname, "src/router")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyPlugin({
      patterns: [{ from: './public', to: 'public' }]
    })
  ],
  devtool: 'source-map',
  devServer: {
    stats: 'errors-warnings',
    contentBase: './build',
    port: 3000,
    compress: true,
    open: true,
    hot: true
  }
};
