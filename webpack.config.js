const path = require('path');
const fs = require('fs');
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
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
        port: 8080,
        https: {
            key: fs.readFileSync(path.join(__dirname, './localhost-key.pem')),
            cert: fs.readFileSync(path.join(__dirname, './localhost.pem')),
        }
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
                test: /\.css$/i,
                exclude: /node_modules/,
                sideEffects: true,
                use: [
                    "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        context: 'src'
                    }
                }
            },
            {
                test: /\.(svg)$/,
                loader: 'url-loader',
            }
        ]
    }
};