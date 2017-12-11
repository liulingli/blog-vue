import Vue from 'vue'
import Router from 'vue-router'
import BlogIndex from '@/components/BlogIndex'
import PersonalWorks from '@/components/PersonalWorks'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BlogIndex
    }, {
      path: '/personalWorks',
      component: PersonalWorks
    }, {
      path: '/aboutMe',
      component: AboutMe
    }
  ]
})
