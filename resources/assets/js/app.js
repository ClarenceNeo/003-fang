
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue');

 import VueRouter from 'vue-router'
 import router from './routes'
 import App from './components/App'

 import zh_CN from './locale/zh_CN';
 import VeeValidate, { Validator } from 'vee-validate';

 Validator.localize('zh_CN', zh_CN);

 Vue.use(VueRouter)
 Vue.use(VeeValidate, {
   locale: 'zh_CN'
 })
 Vue.component('app', App)

 new Vue({
   el: '#app',
   router,
 });
