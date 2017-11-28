const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/_template/app/js/main.js',
    output: {
        path: __dirname + '/_template/app/js',
        filename: 'main.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ],
    node: {
        fs: "empty"
    }
};