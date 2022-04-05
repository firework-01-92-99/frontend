import { createStore } from 'vuex'

export default createStore({
  state: {
      posting: []
  },
  getters: {
    getPosting(state){
      return state.posting
    }
  },
  mutations: {
    setPosting(state, payload){
      state.posting = payload
    }
  },
  actions: {

  },
  modules: {
  }
})
