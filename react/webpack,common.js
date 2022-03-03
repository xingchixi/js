'use strict';

const path = require('path');
const glob = require('glob');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: Object.fromEntries(
        glob.sync('./src/entry/*.*').map(f => [path.parse(f).name, f])
    ),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg)$/,
                use: ['url-loader?limit=8192'],
            },
        ],
    },
    plugins: [
        // clean dist directory on compilation
        // new CleanWebpackPlugin(['dist']),
    ],
};
