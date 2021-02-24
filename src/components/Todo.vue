<template>

    <div style="width:250px; margin:5px auto;">
        <div style="display:flex; justify-content: space-between">
            <span :class="{completed: todo.completed}" @click="toggleStatus"> A ToDo: {{todo.title}} </span>
            <button @click="deleteTodo"> DELETE A TODO </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["todo", "key"],

        methods: {
            deleteTodo() {
                this.$store.dispatch('deleteOldTodo', this.todo, this.key)
            },
            toggleStatus(){
                this.$store.dispatch('toggleStatus', this.todo)
            },
        }
    };
</script>

<style scoped>
    .completed {
        text-decoration: line-through;
    }
</style>