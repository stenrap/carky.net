var ExtractCSS = require('extract-text-webpack-plugin'),
    path       = require('path'),
    webpack    = require('webpack');

module.exports = {
    entry: {
        carky: './public/js/carky'
    },
    module: {
        loaders: [
            {
                test: /backbone\.js$/,
                loader: 'imports?define=>false'
            },
            {
                test: /\.css$/,
                loader: ExtractCSS.extract('style-loader', 'css-loader')
            },
            {
                test: require.resolve('react'),
                loader: 'expose?React'
            }
        ]
    },
    output: {
        path: './public/build/js/',
        filename: '[name].bundle.min.js',
        chunkFilename: '[id].bundle.js?v=[hash]',
        publicPath: '/build/js/'
    },
    plugins: [
        new webpack.IgnorePlugin(/^jquery$/),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new ExtractCSS('./public/build/css/[name].min.css')
    ],
    resolve: {
        extensions: ['', '.js'],
        root: [
            path.join(__dirname, 'node_modules'),
            __dirname + '/public/js/'
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};
