import jwtToken from './../../helpers/jwt'

export default {
  actions: {
    loginRequest({dispatch}, formData){
      return axios.post('/api/login', formData).then(r => {
        jwtToken.setToken(r.data.token)
        // this.$store.state.AuthUser.authenticated = true;
        dispatch('setAuthUser')
      })
    },
    logoutRequest({dispatch}){
      return axios.post('/api/logout').then(response => {
        jwtToken.removeToken()
        dispatch('unsetAuthUser')
      })
    }
  }
}
