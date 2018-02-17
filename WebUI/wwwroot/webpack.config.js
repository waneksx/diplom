"use strict"
{
    // Требуется для формирования полного output пути
    let path = require('path');
    // Плагин для очистки выходной папки (bundle) перед созданием новой
    const CleanWebpackPlugin = require('clean-webpack-plugin');
    var webpack = require('webpack');
    var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

    // Путь к выходной папке
    const bundleFolder = "bundle/";

    module.exports = {

        entry: {
            // 'test': "./index.js",
            //'polyfills': './src/polyfills.ts',
            'app': './src/main.ts'
        },

        // Выходной файл
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, bundleFolder)
        },
        plugins: [
            new CleanWebpackPlugin([bundleFolder]),
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core/,
                path.resolve(__dirname, 'src'), // каталог с исходными файлами
                {} // карта маршрутов
            ),
            new webpack.optimize.CommonsChunkPlugin({
                name: ['app']
            }),
            new UglifyJSPlugin()
        ],

        resolve: {
            modules: ['node_modules']
        },
        module: {
            rules: [
                // {
                //     test: /\.js/,
                //     use: [
                //         {
                //             loader: 'babel-loader',
                //             options: { presets: ["env"] }
                //         }
                //     ]
                // },
                {
                    test: /\.ts$/, // определяем тип файлов
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: { configFileName: path.resolve(__dirname, 'src/tsconfig.json') }
                        },
                        'angular2-template-loader'
                    ]
                }
            ]

        }
    };
}