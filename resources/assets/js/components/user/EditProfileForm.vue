<template>
  <form class="form-horizontal" @submit.prevent="login">
      <div class="form-group" :class="{'has-error': errors.has('name')}">
          <label for="name" class="col-md-4 control-label">用户名</label>
            <div class="col-md-6">
              <input v-model="name"
              v-validate data-vv-rules="required|name" data-vv-as="邮箱"
              id="name" type="text" class="form-control" name="name" required>
              <span class="help-block" v-show="errors.has('name')">{{errors.first('email')}}</span>
            </div>
      </div>

      <div class="form-group" :class="{'has-error': errors.has('email')}">
          <label for="email" class="col-md-4 control-label">邮箱</label>
            <div class="col-md-6">
              <input v-model="email"
              v-validate data-vv-rules="required|email" data-vv-as="邮箱"
              id="email" type="email" class="form-control" name="email" required>
              <span class="help-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
      </div>

      <div class="form-group">
          <div class="col-md-6 col-md-offset-4">
              <button type="submit" class="btn btn-primary">
                  更新
              </button>
          </div>
      </div>
  </form>
</template>

<script>
  import jwtToken from './../../helpers/jwt'
  import { ErrorBag } from 'vee-validate';

  export default {
    data(){
      return {
        name: '',
        email: ''
      }
    }
  }
</script>
