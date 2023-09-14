const path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Diretório base para servir arquivos estáticos
    },
    compress: true,
    port: 8080,
  },
  watch: true,
};
