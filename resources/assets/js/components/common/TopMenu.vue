<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- <a class="navbar-brand" href="/">Brand</a> -->
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class=""><router-link to="/"> 首页 </router-link></li>
        <li class=""><router-link to="/admin"> 后台 </router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <router-link v-if="!user.authenticated" to="/login" tag="li">
          <a>登录</a>
        </router-link>
        <router-link v-if="!user.authenticated" to="/register" tag="li">
          <a>注册</a>
        </router-link>
        <router-link v-if="user.authenticated" to="/profile" tag="li">
          <a>个人主页</a>
        </router-link>
        <li  v-if="user.authenticated">
          <a @click.prevent="logout" href="#">退出</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        user: state => state.AuthUser
      })
    },
    methods: {
      logout() {
        this.$store.dispatch('logoutRequest').then(request => {
          this.$router.push({name: 'home'})
        })
      }
    }
  }
</script>
