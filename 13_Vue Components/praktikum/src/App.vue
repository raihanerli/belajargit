/* eslint-disable */
<template>
  <div id="App">
    <h3>Todo List</h3>
    <ol>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <input v-if="isEdit" type="text" v-model="newEdit" />
        <button @click="deleteTodo(todo.id)">Hapus</button>
        <button @click="editTodo(todo.id)">Edit</button>
      </li>
    </ol>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo">Tambahkan</button>
    <div v-if="this.todos.length >= 4">Hebat!</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      id: 1,
      newTodo: "",
      todos: [],
      isEdit: false,
      newEdit: "",
    };
  },
  methods: {
    addTodo() {
      this.todos.push({
        id: this.id,
        text: this.newTodo,
      });
      this.newTodo = "";
      this.id++;
    },
    deleteTodo(hapusId) {
      for (let index = 0; index < this.todos.length; index++) {
        const element = this.todos[index];
        // console.log(element.id, hapusId);
        if (hapusId == element.id) {
          //proses hapus dilakukan
          // console.log('proses hapus dilakukan');
          this.todos.splice(index, 1);
          // console.log('proses hapus selesai');
        }
      }
    },
    editTodo(editId) {
      // console.log(editId);
      this.isEdit = true;
      for (let index = 0; index < this.todos.length; index++) {
        const element = this.todos[index];
        // console.log(element.id, editId);
        if (editId == element.id) {
          // console.log(element);
          // console.log(this.newEdit); 
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 30px;
}

input {
  width: 80%;
  margin-right: 80px;
}

ol {
  margin: 10px;
}
</style>
