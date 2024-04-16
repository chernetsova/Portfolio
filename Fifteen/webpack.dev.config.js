const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ["@babel/polyfill", "./src/index.js"]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        publicPath: "",
        filename: "js/[name].js"
    },
    target: "web",
    module: {
        rules: [
            {
                //Compile es6-9 to es5
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
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
        })
    ]
};