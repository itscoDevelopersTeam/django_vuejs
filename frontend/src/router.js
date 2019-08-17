import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

// My Imports
import NewBook from '@/components/book/NewBook.vue'
import ListBook from '@/components/book/ListBook.vue'
import EditBook from '@/components/book/EditBook.vue'
import DeleteBook from '@/components/book/DeleteBook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/books',
      name: 'ListBook',
      component: ListBook
    },
    {
      path: '/books/new',
      name: 'NewBook',
      component: NewBook
    },
    {
      path: '/books/:bookId/edit',
      name: 'EditBook',
      component: EditBook
    },
    {
      path: '/books/:bookId/delete',
      name: 'DeleteBook',
      component: DeleteBook
    }
  ],
  mode: 'history'
})
