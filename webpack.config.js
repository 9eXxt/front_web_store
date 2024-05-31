const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const fs = require('fs');



module.exports = {
    entry: {
        main: './src/js/main.js',
        productPage: './src/js/ProductPage.js',
        itemPage: './src/js/ItemPage.js',
        cart: './src/js/Cart.js',
        wishlist: '/src/js/Wishlist.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'build')
        },
        compress: true,
        port: 9000,
        server: {
            type: 'https',
            options: {
              key: fs.readFileSync(path.resolve(__dirname, '/Users/bogdanromanenko/Documents/HTTPS/localhost+1-key.pem')),
              cert: fs.readFileSync(path.resolve(__dirname, '/Users/bogdanromanenko/Documents/HTTPS/localhost+1.pem')),
            }
        },
        open: true,
        watchFiles: ['src/**/*'],
        proxy: [
            {
              context: ['/api'],
              target: 'https://192.168.173:8080',
              pathRewrite: { '^/api': '' },
              secure: false
            },
        ],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCssExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ]
            },
            {
                test: /\.(jpe?g|png)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[name][ext]'
                },
                // use: [
                //     ImageMinimizerPlugin.loader
                // ]
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'icons/[name][ext]'
                },
                // use: [
                //     ImageMinimizerPlugin.loader
                // ]
            },
            {
                test: /\.jsx?$/, // Поддержка как .js, так и .jsx файлов
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: true,
        chunks: ['main']
    }),
    new HtmlWebpackPlugin({
        template: './src/html/Wishlist.html',
        filename: 'html/Wishlist.html',
        inject: true,
        chunks: ['wishlist']
    }),
    new HtmlWebpackPlugin({
        template: './src/html/ProductPage.html',
        filename: 'html/ProductPage.html',
        inject: true,
        chunks: ['productPage']
    }),
    new HtmlWebpackPlugin({
        template: './src/html/ItemPage.html',
        filename: 'html/ItemPage.html',
        inject: true,
        chunks: ['itemPage']
    }),
    new HtmlWebpackPlugin({
        template: './src/html/ShoppingCart.html',
        filename: 'html/ShoppingCart.html',
        inject: true,
        chunks: ['cart']
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].min.css' // Saves CSS in the css folder
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: './src/css/bootstrap-reboot.min.css', to: 'css' },
            { from: './src/img', to: 'img' }, // Копирование изображений из src/img в build/img
            { from: './src/icons', to: 'icons' }
        ]
    }),  
    ],
    resolve: {
        extensions: ['.js', '.jsx'] // Добавьте поддержку расширений .jsx
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    // optimization: {
    //     minimizer: [
    //         "...",
    //         new ImageMinimizerPlugin({
    //             minimizer: {
    //                 implementation: ImageMinimizerPlugin.imageminMinify,
    //                 options: {
    //                     plugins: [
    //                         ['jpegtran', { progressive: true }],
    //                         ['optipng', { optimizationLevel: 5 }],
    //                         ['svgo', {
    //                             plugins: [
    //                                 {
    //                                     removeViewBox: false
    //                                 }
    //                             ]
    //                         }]
    //                     ],
    //                 },
    //             },
    //         })
    //     ]
    // }
}
