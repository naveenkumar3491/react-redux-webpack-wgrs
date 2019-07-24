const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:{
        main: './src/index.js'
    },
    output:{
        filename: 'bundle.js'
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
            test: /\.scss$/,
            use: [
              // inject the compiled css into dom
              { loader: 'style-loader' },
              // interprets imports of css files
              {
                loader: 'css-loader',
              },
              // convert scss to css
              { loader: 'sass-loader' }
            ]
          },
          {
            //IMAGE LOADER
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader:'file-loader'
          },
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
}