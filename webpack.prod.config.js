const {
    merge
} = require('webpack-merge');
const base = require('./webpack.config')
    // if I annotate this line everything is ok
const TerserPlugin = require("terser-webpack-plugin");
module.exports = merge(base, {
    // and below block
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true
        })],
    },
})