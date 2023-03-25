<script setup >
import { ref } from 'vue'
import { useTodoListStore } from '../stores/todoList';
const store = useTodoListStore();
const todo = ref('')

function addItemAndClear(item){
  if(item.length === 0) return

  store.addTodo(item)
  todo.value = ''
}


</script>

<template>
  <div>
    <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
            <form @submit.prevent="addItemAndClear(todo)">
            <div class="flex mt-4">
                <input type="text" v-model="todo" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo">
                <button class="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-400">Add</button>
            </div>
          </form>
    </div>
    
  </div>
</template>

<style scoped></style>
