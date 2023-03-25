<template>
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
    <TodoForm />
    <TodoList />
    </div>
  </div>
</template>

<script setup>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'


</script>

<style scoped></style>

