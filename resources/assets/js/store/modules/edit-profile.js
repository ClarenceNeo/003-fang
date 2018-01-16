import jwtToken from './../../helpers/jwt'

export default {
  actions: {
    updateProfileRequest({dispatch}, formData){
      return axios.post('/api/userProfileUpdate', formData).then(response => {

      }).catch(error => {
        
      })
    },
  }
}
