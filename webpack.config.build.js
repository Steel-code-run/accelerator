var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: "../src/pages/index/index.js",
        header: "../src/template/header/header.js",
        // second: "../src/pages/second/second.js" пример подгрузки след. страницы
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    output: {
        filename: 'scripts/[name].bundle.js',
    }
};