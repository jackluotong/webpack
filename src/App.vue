<template>
    <div>
        <main-header></main-header>
        <main-todo></main-todo>
        <todo-info></todo-info>
    </div>
</template>
<script>
import MainHeader from './components/MainHeader/MainHeader.vue'
import MainToDo from './components/MainToDo/MainToDo.vue'
import ToDoInfo from './components/MainToDo/Son/ToDoInfo/index.vue'
import './assets/style/global.styl'
import './index.css'
export default {
    name: 'App',
    components: {
        MainHeader,
        MainToDo,
        ToDoInfo,
    },
    data() {
        return {}
    },
    methods: {},
    created() {},
}
</script>
<style lang="stylus" scoped>
li:nth-of-type(odd) {
  color: yellow;
}
</style>
