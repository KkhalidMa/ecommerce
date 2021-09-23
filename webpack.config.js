var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");
var miniCssExtractPlugin = require("mini-css-extract-plugin");
var optimizeCssPlugin = require("optimize-css-assets-webpack-plugin");
const { Template } = require("webpack");

module.exports = {

    entry: {
        app: './src/index.js'
    },

    output: {
        path: path.join(__dirname,"/dist"),
        publicPath: '',
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname,"/dist"),
        port: 1239,
        writeToDisk: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        }
                    }
                ]
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: miniCssExtractPlugin.loader,
                    options: {
                      publicPath: '../'
                    }
                  },
                  'css-loader',
                ]
            },

            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        }
                    }
                ]
            },
        ],
    },

    plugins: [
        new htmlWebpackPlugin ({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new miniCssExtractPlugin ({
            filename: "css/style.css"
        }),

        new optimizeCssPlugin ({}),
    ],
};