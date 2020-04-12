const path = require('path');

module.exports = {
    // Complete path to main program
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // Path an filename for the output
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    // for webpack-dev-server only
    devServer: {
        // path for the output
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        // webpack rules
        rules: [
            { // rule: .js files (except in nodo_modules) use babel-loader
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            { // rule: .css use style- and css-loader
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader', },
                    { loader: 'css-loader', },
                ],
            },
            { // rule: image use file-loader
                test: /.*\.(gif|png|jpe?g)$/i,
                use: {
                    loader: 'file-loader',
                }
            }
        ],
    },
};