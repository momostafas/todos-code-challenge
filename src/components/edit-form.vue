<template lang="html">
  <v-form 
    ref="form" 
    v-model="valid" 
    @submit="preventSubmission" 
    lazy-validation>
    <v-container fluid>
      <v-layout row>
        <v-flex xs8>
          <v-text-field 
            label="Todo" 
            v-model="todo.title" 
            placeholder="What do you have to do?" 
            :rules="rules.required" 
            solo />
        </v-flex>
        <v-flex xs4>
          <v-checkbox 
            label="Done" 
            v-model="todo.done" 
            required />
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
import VueTypes from 'vue-types';

export default {
    data() {
        return {
            valid: true,
            rules: {
                required: [
                    v => !!v || 'Field is required',
                ]
            },
        }
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
         * Prevent form default submission.
         */
        preventSubmission(e) {
            e.preventDefault();
        }
    },
}
</script>

<style lang="css">
</style>
