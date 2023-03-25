import { defineStore } from 'pinia'


export const useTodoListStore = defineStore('todoList', {
  // state
  state: () => ({
    todoList: [],
    id: 0
  }),
  actions: {
    addTodo(item) {
      this.todoList.push({ item, id: this.id++, completed: false })
    },
    deleteTodo(itemId) {
      this.todoList = this.todoList.filter((obj) => {
        return obj.id !== itemId
      })
    },
    toggleCompleted(id){
        const todo = this.todoList.find((obj) => obj.id === id)
        if(todo){
            todo.completed = !todo.completed
        }
    }
  }
  // getters
  // actions
})
