const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  console.log(isDevelopment);
  return ({
    entry: {
      main: './src/index.js'
    },
    output: {
      filename: 'bundle.js'
    },
    mode: argv.mode,
    devtool: isDevelopment ? '#eval-source-map' : 'source-map',
    devServer:{
      port: '7000'
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
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
            // inject the compiled css into dom
            { loader: 'style-loader' },
            // interprets imports of css files
            {
              loader: 'css-loader',
              query: {
                modules: { localIdentName: isDevelopment ? '[name]__[local]___[hash:base64:5]' : '[hash:base64:5]'}
               }
            },
            // convert scss to css
            { loader: 'sass-loader'
            }
          ]
        },
        {
          //IMAGE LOADER
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: "./src/index.html"
        // filename: "./index.html"
      })
    ]
  })
}