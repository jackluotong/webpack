/**
 * 创建vue根实例
 * 挂载app组建
 */
import App from './App.vue'
import Vue from 'vue'
new Vue({
    el: '#app',
    components: {
        App,
    },
    template: '<App/>',
})
