const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// CONFIG OBJECT HERE
module.exports = {
    entry: path.join(__dirname, './src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    context: path.join(__dirname, 'src'),
    mode: process.env.NODE_ENV,
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'application.css'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        proxy: {
            '/api': 'http://localhost:3000',
        },
        port: 8080,
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|jp2|svg|webp)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                },
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader',
            }
        ]
    }
};