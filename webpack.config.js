const path = require('path');

module.exports = {
  entry: "./lib/src/index.tsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist/public")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  mode: 'development',
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  }
}