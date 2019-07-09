module.exports = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  entry: "./src/view.js",
  output: {
    path: __dirname + "/public",
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: { inline: true },
  devtool: "source-map"
};
