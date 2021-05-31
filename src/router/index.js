import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ContactPage from '../views/ContactPage.vue'
import Credits from '../views/Credits.vue'
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/credits',
    name: 'Credits',
    component: Credits
  },
  {
    path: '*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

window.fetchedAuthState = false

router.beforeEach(async(to, from, next) => {
  document.title = ` ${process.env.VUE_APP_TITLE} - ${to.name}`;

  if (to.meta.authRequired) {
    let user = true
    if (user) {
      next();
    } else {
      alert('You must be logged in to see this page');
      next({
        path: '/signinpage',
      });
    }
  } else {
    next()
  }
})
export default router
