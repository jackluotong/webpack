<template>
    <div>
        <main-header></main-header>
    </div>
</template>
<script>
import MainHeader from './components/MainHeader/index.vue'
import './style/global.styl'
import './index.css'
export default {
    name: 'App',
    components: {
        MainHeader,
    },
    data() {
        return {
            content: '',
        }
    },
    methods: {
        add() {
            if (this.content) {
                this.toDo.push(this.content)
                this.content = null
            } else {
                console.log(this.content)
            }
        },
    },
    created() {},
}
</script>
<style lang="stylus" scoped>
li:nth-of-type(odd) {
  color: yellow;
}
</style>
