const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
const prodConfig = {
    mode: 'production', //' production
    //入口
}
module.exports = merge(baseConfig, prodConfig)
