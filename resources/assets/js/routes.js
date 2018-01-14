import VueRouter from 'vue-router'

let routes = [{
  path: '/',
  component: require('./components/Home')
}, {
  path: '/admin',
  component: require('./components/Admin')
}, {
  path: '/posts/:id',
  name: 'posts',
  component: require('./components/Post')
}]

export default new VueRouter({
  // mode: 'history',
  routes
})
