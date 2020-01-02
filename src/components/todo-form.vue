<template lang="html">
  <v-form 
    ref="form" 
    v-model="valid" 
    @submit="addTodo" 
    lazy-validation>
    <v-text-field 
      label="Todo" 
      v-model="fieldText" 
      placeholder="What do you have to do?" 
      :rules="rules.required" 
      solo />
  </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: true,
            fieldText: '',
            rules: {
                required: [
                    v => !!v || 'Field is required',
                ]
            }
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            if (this.$refs.form.validate()) {
                this.$store.commit('addTodo', this.fieldText);
                this.fieldText = '';
                this.$refs.form.reset()
            }
        }
    },
}
</script>

<style lang="css">
</style>
