import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/container/Container'
import Home from '@/views/home'
import Application from '@/views/application'
import News from '@/views/news'
import Activitys from '@/views/activitys'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Container',
      component: Container,
      children: [
        {path: '/home', name: '首页', component: Home, },
        {path: '/news', name: "新闻列表", component: News, },
        {path: '/activitys', name: '活动列表', component: Activitys, },
        {path: '/application', name: '申请列表', component: Application, },
      ],
    }
  ],
  linkActiveClass: 'mui-active'
  
 
})
