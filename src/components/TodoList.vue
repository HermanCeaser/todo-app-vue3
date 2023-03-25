<script setup lang="ts">
import { useTodoListStore } from '../stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

</script>

<template>
  <div>
    <div v-for="todo in todoList" :key="todo.id" class="flex mb-4 items-center">
      <p :class="{[`line-through text-red-500`]: todo.completed}"
      class="w-full text-grey-darkest">{{ todo.item }}</p>
      <button @click.stop="toggleCompleted(todo.id)" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-green-500">Done</button>
      <button @click.stop="deleteTodo(todo.id)" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-red-500">Remove</button>
    </div>
   
  </div>
  </template>

<style scoped></style>
