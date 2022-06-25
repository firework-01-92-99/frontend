import axios from 'axios'
export default ({
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        },
    },

    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, data) {
            state.user = data
        },
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            // let response = await axios.post('http://localhost:3000/main/login', credentials)
              let response = await axios.post(`${process.env.VUE_APP_ROOT_API}main/login`, credentials)
            console.log(response.data)

            return dispatch('attempt', response.data.token)
        },

        async attempt({ commit, state }, token) {
            console.log(token);
            if (token) {
                commit('SET_TOKEN', token)
            }
            if (!state.token) { //token is empty
                return
            }

            try {
                // let response = await axios.get('http://localhost:3000/allrole/me')
                let response = await axios.get(`${process.env.VUE_APP_ROOT_API}allrole/me`)
                commit('SET_USER', response.data)
                console.log(state.user)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        async user({ commit, state }) {
            try {
                // let response = await axios.get('http://localhost:3000/allrole/me')
                let response = await axios.get(`${process.env.VUE_APP_ROOT_API}allrole/me`)
                commit('SET_USER', response.data)
                console.log(state.user)
            } catch (e) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        signOut({ commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)

        },
    }
})