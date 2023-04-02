const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(""),
  },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.s(a|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|gif)/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 5000 },
          },
        ],
        type: "javascript/auto",
      },
    ],
  },
  devServer: {
    static: { directory: path.resolve("src") },
    hot: true,
    open: true,
    port: 8000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
