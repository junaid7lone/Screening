const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry :{
        index: path.resolve(__dirname,"src","index.js")
    },
    output :{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,"build","bundle.js"),
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-react','@babel/preset-env']
                    }
                  }
            },
            {
                test:/\.(css|sass|scss)$/,
                use: ['style-loader','css-loader','sass-loader'],
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
          template:path.resolve(__dirname,"src","index.html")
        })
      ],
}