/* eslint-disable */
<template>
  <div class="input">
    <ol>
      <li v-for="(todo, index) in todos" :key="todo.class">
        {{ todo.Text }}
        <button @click="deleteList(index)">Hapus</button>
        <button @click="editList(index)">Edit</button>
      </li>
    </ol>
   
  </div>
</template>

<script>
export default {
  name: "InputArray",
  props: {
    todos: String,
  },
  data() {
    return {
      todoBaru: ''
    };
  },
  methods: {
    addTodo() {
      this.$emit("update-todo");
    },
    deleteList(index) {
      this.todo.splice(index, 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  width: 100vw;
  /* display: flex !important; */
}
h3 {
  margin: 40px 0 0;
}
ol {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
