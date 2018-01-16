import VueRouter from 'vue-router'
import Store from './store/index'
import jwtToken from './helpers/jwt'

let routes = [
  {
    path: '/',
    name: 'home',
    component: require('./components/public/Home'),
    meta: {}
  },
  {
    path: '/admin',
    component: require('./components/admin/AdminWrapper'),
    children: [
      {
        path: '',
        name: 'admin.house',
        component: require('./components/admin/House'),
        meta: { requiresAuth: true }
      },
      {
        path: '/admin-user',
        name: 'admin.user',
        component: require('./components/admin/User'),
        meta: { requiresAuth: true }
      },
    ],
    meta: {}
  },
  {
    path: 'admin/house/:id',
    name: 'house-form',
    component: require('./components/admin/HouseForm'),
    meta: {}
  },
  {
    path: '/house/:id',
    name: 'house',
    component: require('./components/public/House'),
    meta: {}
  },
  {
    path: '/register',
    name: 'register',
    component: require('./components/register/Register'),
    meta: { requiresGuest: true }
  },
  {
    path: '/login',
    name: 'login',
    component: require('./components/login/Login'),
    meta: { requiresGuest: true }
  },
  {
    path: '/confirm',
    name: 'confirm',
    component: require('./components/confirm/Email'),
    meta: {}
  },
  {
    path: '/profile',
    component: require('./components/user/ProfileWrapper'),
    children: [
      {
        path: '',
        name: 'profile',
        component: require('./components/user/Profile'),
        meta: { requiresAuth: true }
      },
      {
        path: '/edit-profile',
        name: 'profile.editProfile',
        component: require('./components/user/EditProfile'),
        meta: { requiresAuth: true }
      },
      {
        path: '/edit-password',
        name: 'profile.editPassword',
        component: require('./components/user/EditPassword'),
        meta: { requiresAuth: true }
      }
    ],
    meta: { requiresAuth: true }
  }]

// export default new VueRouter({
//   mode: 'history',
//   routes
// })

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        if (Store.state.AuthUser.authenticated || jwtToken.getToken()) {
            return next()
        } else {
            return next({'name': 'login'})
        }
    }
    if (to.meta.requiresGuest) {
        if (Store.state.AuthUser.authenticated || jwtToken.getToken()) {
            return next({'name': 'home'})
        } else {
            return next()
        }
    }
    return next()
})

export default router
