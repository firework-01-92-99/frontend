import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posting: { content:[] },
    workingHistory: [],
  },
  getters: {
    getPosting(state) {
      return state.posting
    },
    getWorkingHistory(state){
      return state.workingHistory
    }
  },
  mutations: {
    setPosting(state, payload) {
      state.posting = payload
    },
    setWorkingHistory(state, payload){
      state.workingHistory = payload
      console.log(payload)
    },
  },
  actions: {

  },
  modules: {
    auth
  }
})
