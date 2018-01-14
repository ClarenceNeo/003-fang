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
}]

export default new VueRouter({
  mode: 'history',
  routes
})
