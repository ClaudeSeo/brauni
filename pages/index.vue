<template>
  <section class="container">
    <p class="title">DOCUMENT NAME</p>
    <input type="text" v-model="fileName">
    <editor />
  </section>
</template>

<script>
import Editor from '~components/Editor.vue'

export default {
  components: {
    Editor
  },
  computed: {
    fileName: {
      get () {
        return this.$store.state.fileName
      },
      set (val) {
        this.$store.commit('updateFileName', val)
      }
    }
  }
}
</script>
<style scoped>
input {
  width: 100%;
  border: 0;
  padding: 0 16px;
  margin-bottom: 0.8rem;
}
input:focus {
  outline: none;
}
</style>
