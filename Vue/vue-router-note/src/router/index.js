import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/foo', component: () => import('@/views/foo') },
  {
    path: '/user/:id',
    component: () => import('@/views/user'),
    children: [
      {
        path: 'all',
        components: {
          profile: () => import('@/views/user/profile'),
          post: () => import('@/views/user/post')
        }
      },
      {
        path: 'profile',
        component: () => import('@/views/user/profile')
      },
      {
        path: 'post',
        component: () => import('@/views/user/post')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router
