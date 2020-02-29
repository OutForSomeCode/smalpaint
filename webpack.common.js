const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  entry: { bundle: ["./src/main.js"] },
  resolve: {
    alias: { svelte: path.resolve("node_modules", "svelte") },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"]
  },
  output: { path: __dirname + "/build" },
  module: { rules: [{ test: /\.tsx?$/, loader: "ts-loader" }] },
  plugins: [
    new CopyPlugin([{ from: "public", to: "." }]),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: true
    }),
    new MiniCssExtractPlugin({ filename: "css/[name].[chunkhash:8].css" })
  ]
};
