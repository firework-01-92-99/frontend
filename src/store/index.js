import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posting: { content:[] }
  },
  getters: {
    getPosting(state) {
      return state.posting
    }
  },
  mutations: {
    setPosting(state, payload) {
      state.posting = payload
    }
  },
  actions: {

  },
  modules: {
    auth
  }
})
