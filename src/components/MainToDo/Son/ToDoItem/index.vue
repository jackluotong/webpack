<template>
    <div class="todo-item">
        <input type="checkbox" />
        <label for="">todo1</label>
        <button>1</button>
    </div>
</template>
<script>
export default {
    name: 'ToDoItem',
}
</script>
<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
}
label {
    flex: 1;
    appearance: none;
    outline: none;
}
label ::after {
    content: url();
}
input {
    width: 60px;
}
</style>
