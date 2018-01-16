export default {
  actions: {
    updatePasswordRequest({dispatch}, formData){
      return axios.post('/api/userPasswordUpdate', formData).then(response => {

      }).catch(error => {

      })
    },
  }
}
