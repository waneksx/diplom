"use strict"
{
    // Требуется для формирования полного output пути
    let path = require('path');
    let babel = require('babel');
    // Плагин для очистки выходной папки (bundle) перед созданием новой
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    // Путь к выходной папке
    const bundleFolder = "bundle/";

    module.exports = {
        // Точка входа в приложение
        entry: "./index.js",

        // Выходной файл
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, bundleFolder)
        },
        plugins: [
            new CleanWebpackPlugin([bundleFolder])
        ],  
        resolve: {
            modules: ['node_modules']
        },
        module: {
            loaders: [
                {
                    test: /\.js/,
                    loader: 'babel',
                },
                {
                    test: /\.css$/,
                    loader: 'style!css'
                }
            ]
        }
    };
}