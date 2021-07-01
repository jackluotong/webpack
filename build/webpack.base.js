const path = require('path')
//引入插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//引入html-webpack-plugin
const HtmlWebPackPlugin = require('html-webpack-plugin')
//引入clean-webpack-plugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//引入webpack插件
const webpack = require('webpack')
module.exports = {
    //source map 建立打包后的文件映射关系
    //入口
    entry: './src/main.js',
    //c出口
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),
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
                loader: 'url-loader', //改变loader加载规则
                options: {
                    name: '[name].[ext]',
                    limit: 2048,
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], //从右往左打包
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'stylus-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\/less?$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebPackPlugin({ template: './index.html' }), //打包结束时在dist目录下自动生成index.html文件，把打包好的js文件引入到html中
        new CleanWebpackPlugin(), //清除之前的文件名
    ],
    resolve: {
        //加入别名
        alias: {
            // 解决文件查找
            vue: 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            style: path.resolve(__dirname, '../src/assets/style'),
            images: path.resolve(__dirname, '../src/assets/images'),
        },
    },
}
