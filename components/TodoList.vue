<template>
  <div>
    <h2>My To-Do List</h2>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
    </ul>
    <input
      v-model="newTodo"
      @keyup.enter="addTodo"
      placeholder="Add a new task"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todos = ref([]);
const newTodo = ref('');

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value);
    newTodo.value = '';
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
