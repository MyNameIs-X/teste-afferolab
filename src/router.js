import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'introduction',
      path: '',
      component: () => import('./views/introduction.vue')
    },
    {
      name: 'presentation',
      path: '/presentation',
      component: () => import('./views/presentation.vue')
    },
    {
      name: 'questions',
      path: '/questions',
      component: () => import('./views/questions.vue')
    },
    {
      name: 'result',
      path: '/result',
      component: () => import('./views/result.vue')
    }
  ]    
})