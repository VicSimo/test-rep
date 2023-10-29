<template>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
            {{ todo.title }}
        <button @click="removeTodo(todo)">Удалить</button>            "
        </li>
      </ul>
      <TodoForm @addTodo="addTodo" />
    </div>
</template>
  
  
  <script>
  import axios from 'axios';
  import TodoForm from './TodoForm.vue';
import { remove } from '@vue/shared';

 
export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        this.todos = response.data;
      });
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    removeTodo(todo) {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1)
        }
    }
  },
  components: {
    TodoForm,
  },
};
  </script>

<style>
</style>
  