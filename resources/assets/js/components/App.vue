<template>
  <div>
    <top-menu></top-menu>
    <notification></notification>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import TopMenu from './common/TopMenu'
  import Notification from './common/Notification'
  import jwtToken from './../helpers/jwt'
  export default {
    created(){
      if (jwtToken.getToken()) {
        this.$store.dispatch('setAuthUser')
      }
    },
    components: {
      TopMenu,
      Notification
    },
    mounted(){
    }
  }
</script>
