<template>
    <div>
      <input v-model="newTodo" type="text" placeholder="Добавить новое дело" />
      <button @click="addTodo">Добавить</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo) {
        // Создайте новую задачу
        const newTask = {
          id: Date.now(), // Генерируйте уникальный ID
          title: this.newTodo,
        };
        // Отправьте новую задачу в родительский компонент
        this.$emit('addTodo', newTask);
        // Очистите поле ввода
        this.newTodo = '';
        }
      },
    },
  };
  </script>
  