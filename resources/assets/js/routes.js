import VueRouter from 'vue-router'

let routes = [{
  path: '/',
  component: require('./components/public/Home')
}, {
  path: '/admin',
  component: require('./components/admin/HouseForm'),
  // children: [
  //   path: '',
  //   name: 'admin',
  //   component: require('./components/admin/HouseForm'),
  // ],
}, {
  path: '/house/:id',
  name: 'house',
  component: require('./components/public/House')
}, {
  path: '/register',
  name: 'register',
  component: require('./components/register/Register')
}, {
  path: '/confirm',
  name: 'confirm',
  component: require('./components/confirm/Email')
}]

export default new VueRouter({
  mode: 'history',
  routes
})
