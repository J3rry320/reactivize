const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack"); // Add this line

module.exports = {
  target: "node",
  entry: "./bin/reactivize.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  mode: "production",
  externals: [nodeExternals()],
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/templates",
          to: "templates",
        },
      ],
    }),
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }), // Add this line
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
