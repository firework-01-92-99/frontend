import { createStore } from 'vuex'
import auth from './auth'

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
    auth
  }
})
