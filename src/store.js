import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [{ title: 'Task 1', id: '_A32D', done: false }, { title: 'Task 2', id: '_B1S3', done: true }, { title: 'Task 3', id: '_CS32', done: false }]
  },
  getters: {
    /**
      * Sort Todos tasks by done to not done.
    */
    sortedTodos(state) {
      return state.todos.sort((a, b) => b.done - a.done);
    }
  },
  mutations: {
     /**
      * Add Task with random ID String.
      * @param {string} title - Title of the todo task.
      */
    addTodo(state, title) {
      let todo = { title: title, id: '_' + Math.random().toString(36).substr(2, 9), done: false };
      state.todos.push(todo);
    },
     /**
      * Change Status of task to Done.
      * @param {object} todo - Task to be done.
      */
    doneTodo(state, todo) {
      let todoElement = state.todos.find(e => e.id == todo.id);
      todoElement.done = true;
    },
      /**
      * Delete Certain Task.
      * @param {object} todo - Task to be deleted.
      */
    deleteTodo(state, todo) {
      let index = state.todos.findIndex(e => e.id == todo.id);
      state.todos.splice(index, 1);
    },
      /**
      * Change title or status of certain Task.
      * @param {object} todo - Task to be updated.
      */
    updateTodo(state, todo) {
      let todoElement = state.todos.find(e => e.id == todo.id);
      Object.assign(todoElement, todo);
    }
  },
  actions: {

  }
})
