import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Posts from './views/PostsPage.vue'
import NewPost from './views/NewPostPage'
import EditPost from './views/EditPostPage'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/posts/new',
      name: 'newPost',
      component: NewPost
    },
    {
      path: '/posts/:id',
      name: 'editPost',
      component: EditPost
    }
  ]
})
