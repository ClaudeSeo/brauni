import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    fileName: 'Untitled.md'
  },
  mutations: {
    updateFileName (state, fileName) {
      state.fileName = fileName
    }
  }
})

export default store
