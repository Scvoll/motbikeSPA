const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: "./index.jsx",
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name]/bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, './front'),
        open: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(c|sc)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff2?|ttf|otf|eot|svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: { name: '[path][name]-[hash].[ext]'}
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),
        new HtmlWebPackPlugin({
            inject: true,
            template: "./index.html"
        })
    ]
};