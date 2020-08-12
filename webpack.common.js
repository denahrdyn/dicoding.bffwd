const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const loader = require('sass-loader');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    }

                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                    loader: "file-loader"
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            filename: "index.html",
            minify: "production"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery'
        }),
    ],
};