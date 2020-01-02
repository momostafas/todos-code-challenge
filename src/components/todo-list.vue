<template lang="html">
  <div>
    <TodoItem v-for="todo in todos" class="mb-3" />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';

export default {
  components: {
    TodoItem,
  },
  computed: {
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>

<style lang="css">
</style>
