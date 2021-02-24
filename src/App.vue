<template>
  <div id="app">
    <h1>Todos</h1>

    <todos-list></todos-list>
    <todo-form></todo-form>
  </div>
</template>

<script>
  import TodosList from "./components/TodosList"
  import TodoForm from "./components/TodoForm"

  export default {
    name: 'App',
    components: {
      TodosList,
      TodoForm
    },

    computed: {

    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
