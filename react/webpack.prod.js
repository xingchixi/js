'use strict';

const path = require('path');

const common = require('./webpack.common.js');

module.exports = {
    ...common,
    mode: 'production',
    // devtool: 'source-map',
    output: {
        ...common.output,
        path: path.join(__dirname, 'dist_prod'),
    },
};
