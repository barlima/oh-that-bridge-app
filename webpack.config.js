const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

require('dotenv').config({ path: '.env'});

module.exports = (env) => {
  // const isProduction = env === "production";
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.(css|scss)$/,
          use: CSSExtract.extract({
            use: [
              'css-loader',
            ]
          })
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "public/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      historyApiFallback: true,
      port: 8080,
      publicPath: "http://0.0.0.0:8000/dist/", 
    },
    plugins: [
      CSSExtract,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env.GOOGLE_MAPS_API_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
      })
    ],
  };
};
