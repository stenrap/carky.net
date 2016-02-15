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
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            },
            {
                test: /\.(png|jpg|eot|svg|ttf|woff|woff2)/,
                loader: 'url-loader'
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
        new webpack.optimize.DedupePlugin()
    ],
    resolve: {
        extensions: ['', '.css', '.js'],
        root: [
            path.join(__dirname, 'node_modules'),
            __dirname + '/public/css',
            __dirname + '/public/js',
            __dirname + '/public/js/models',
            __dirname + '/public/js/views',
            __dirname + '/public/js/views/components',
            __dirname + '/public/js/controllers'
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};
