<template>
  <div id="App">
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo }}
      </li>
    </ol>
    <input type="text" v-model="newTodo"/>
    <button @click="addTodo">Tambahkan</button>
    <div v-if="this.todos.length >= 4">Hebat!</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
  },
};
</script>

<style>
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
