import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home.vue';
import Learn from './components/Learn.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/learn/:lesson',
      name: 'Learn',
      component: Learn,
      props: true,
    },
  ]
})