<template lang="html">
  <div>
    <div 
      v-for="todo in todos" 
      :key="todo.id">
      <TodoItem 
        :todo="todo" 
        class="mb-3" />
    </div>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';

export default {
    components: {
        TodoItem,
    },
    computed: {
        /**
         * Get todo tasks from vuex store getters sorted from done to not done.
         */
        todos() {
            return this.$store.getters.sortedTodos;
        }
    }
}
</script>

<style lang="css">
</style>
