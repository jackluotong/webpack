<template>
    <div class="main-todo">
        <input type="text" class="add-todo" autofocus />
    </div>
</template>
<script>
import ToDoItem from './Son/ToDoItem/index.vue'
export default {
    name: 'MainToDo',
    components: {
        ToDoItem,
    },
}
</script>
<style scoped>
.main-todo {
    margin: 0 auto;
    width: 600px;
    box-shadow: 0 0 5px #222;
    background-color: beige;
}
.add-todo {
    padding: 10px 10px 10px 10px;
    font-size: 24px;
    font-weight: inherit;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border: none;
    outline: none;
    box-sizing: border-box;
}
</style>
