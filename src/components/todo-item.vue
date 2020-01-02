<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ todo.title }}</h3>
      </div>
      <v-icon 
        v-if="todo.done" 
        color="success" 
        fab 
        dark>done</v-icon>
      <v-spacer />
      <v-dialog 
        v-model="editDialog" 
        persistent 
        max-width="500">
        <v-btn 
          slot="activator" 
          fab 
          title="Edit" 
          small 
          dark 
          color="primary">
          <v-icon>edit</v-icon>
        </v-btn>
        <v-card>
          <editForm :todo="todoCopy" />
          <v-card-actions>
            <v-spacer />
            <v-btn 
              color="blue darken-1" 
              flat 
              @click="editDialog = false">Close</v-btn>
            <v-btn 
              color="blue darken-1" 
              flat 
              @click="updateTodo(todoCopy)">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-title>
    <v-card-actions>
      <v-btn 
        @click="doneTodo(todo)" 
        v-if="!todo.done">
        Complete
      </v-btn>
      <v-dialog 
        v-model="deleteDialog" 
        persistent 
        max-width="290">
        <v-btn 
          slot="activator" 
          color="error">
          Delete
        </v-btn>
        <v-card>
          <v-card-title class="headline">Confirm Deletion</v-card-title>
          <v-card-text>Delete this task ?</v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              color="green darken-1" 
              flat 
              outline 
              @click.native="deleteDialog = false">Cancel</v-btn>
            <v-btn 
              color="error darken-1" 
              flat 
              outline 
              @click="deleteTodo(todo)">Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import VueTypes from 'vue-types';
import editForm from './edit-form'
export default {
    components: {
        editForm
    },
    data() {
        return {
            deleteDialog: false,
            editDialog: false,
        }
    },
    computed: {
        todoCopy() {
            return {};
        }
    },
    created() {
        /**
         * take a copy from todo element for the edit form
         */
        Object.assign(this.todoCopy, this.todo);
    },
    props: {
        todo: VueTypes.shape({
            title: VueTypes.string,
            id: VueTypes.string,
            done: Boolean,
        })
    },
    methods: {
        /**
         * Call the function in store which changes the status of task to Done.
         * @param {object} todo - Task to be done.
         */
        doneTodo(todo) {
            this.$store.commit('doneTodo', todo);
        },
        /**
         * Call the function in store which deletes certain rask.
         * @param {object} todo - Task to be deleted.
         */
        deleteTodo(todo) {
            this.$store.commit('deleteTodo', todo);
            this.deleteDialog = false;
        },
        /**
         * Call the function in store which Changes title or status of certain Task.
         * @param {object} todo - Task to be updated.
         */
        updateTodo(todo) {
            this.$store.commit('updateTodo', todo);
            this.editDialog = false;
        },
    },
}
</script>

<style lang="css">
</style>
