import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WebIndex from '@/components/WebIndex'
import Header from '@/components/nav/Header'
import Login from '@/components/account/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/nav',
      name: 'WebIndex',
      component: WebIndex
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/Login', // 登录
      name: 'Login',
      component: Login
    },
  ]
})
