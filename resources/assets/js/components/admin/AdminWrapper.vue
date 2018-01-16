<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="list-group">
          <router-link :to="{name: 'admin.house'}" class="list-group-item" activeClass="active" exact>房源管理</router-link>
          <router-link :to="{name: 'admin.user'}" class="list-group-item" activeClass="active" exact>用户管理</router-link>
        </div>
      </div>
      <div class="col-md-9">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'admin-wrapper'
  }
</script>
