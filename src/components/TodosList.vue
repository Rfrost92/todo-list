<template>

    <div>
        <h2>TODOS List:</h2>
        <todo v-for="(todo, index) in todos" :key="index" :todo="todo" > </todo>
    </div>
</template>

<script>
    import Todo from "./Todo"

    export default {
        components: {
            Todo
        },
        computed: {
            todos() {
                return this.$store.state.todos;
            }
        }
    }


</script>