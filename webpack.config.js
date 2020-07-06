const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = (env, argv) => {
  const backend_url =
    argv.mode === 'production'
      ? 'https://blooming-atoll-75500.herokuapp.com/api/notes'
      : 'http://localhost:3001/api/notes';

  return {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'main.js',
    },
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      compress: true,
      host: 'localhost',
      disableHostCheck: true,
      port: 3001,
      overlay: true,
      proxy: {
        '/auth': 'http://localhost:3000',
        '/api': 'http://localhost:3000',
      },
    },

    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
        {
          test: /\.scss$/,
          use: [
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new webpack.DefinePlugin({
        BACKEND_URL: JSON.stringify(backend_url),
      }),
    ],
  };
};

module.exports = config;
