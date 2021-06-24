const path = require('path')
//引入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', //' production
    //入口
    entry: './src/main.js',
    //c出口
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    //打包规则
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
    },
}
