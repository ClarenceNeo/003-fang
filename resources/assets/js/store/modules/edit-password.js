export default {
  actions: {
    updatePasswordRequest({dispatch}, formData){
      return axios.post('/api/userPasswordUpdate', formData).then(response => {
        dispatch('showNotification', {level:'success',msg:'修改密码成功！'})
      }).catch(error => {
        dispatch('showNotification', {level:'error',msg:'修改密码失败！'})
      })
    },
  }
}
