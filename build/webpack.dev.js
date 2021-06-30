const baseConfig = require('./webpack.base')
const { merge } = require('webpack-merge')
//引入webpack插件
const webpack = require('webpack')
const devConfig = {
    mode: 'development', //' production
    //source map 建立打包后的文件映射关系
    // devtool: 'cheap-module-eval-source-map',系统默认
    //入口
    //热更新
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        port: 3030,
        compress: true,
    },
    //插件
    plugins: [new webpack.HotModuleReplacementPlugin()],
}
module.exports = merge(baseConfig, devConfig)
