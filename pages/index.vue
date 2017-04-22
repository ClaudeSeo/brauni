<template>
  <section class="container">
    <p class="title">DOCUMENT NAME</p>
    <input type="text" v-model="fileName">
    <previewer/>
  </section>
</template>

<script>
import Previewer from '~components/Previewer.vue'

export default {
  components: {
    Previewer
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
