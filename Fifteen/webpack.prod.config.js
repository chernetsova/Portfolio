const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polifill", "./src/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: "",
        filename: "js/[name].js"
    },
    target: "web",
    devtool: "#source-map",
    optimization: {
        minimizer:[
            new uglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new optimizeCssAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                //Compile es6-9 to es5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: ["file-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '/css/[name].css',
            chunkFilename: '[id].css'
        })

    ]
};