import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/container/Container'
import Home from '@/views/home'
import Application from '@/views/application'
import News from '@/views/news'
import Activities from '@/views/activities'
import IndexContainer from '@/container/IndexContainer'
import IndexApplication from '@/views/indexApplication'
import IndexHome from '@/views/indexHome'
import Login from '@/views/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      redirect: '/admin/home',
      name: 'Container',
      component: Container,
      children: [
        {path: '/admin/home', name: '管理首页', component: Home, },
        {path: '/admin/news', name: "新闻列表", component: News, },
        {path: '/admin/activities', name: '活动列表', component: Activities, },
        {path: '/admin/application', name: '申请列表', component: Application, },
      ],
    },
    {
      path: '/',
      name: '首页',
      redirect: '/home',
      component:IndexContainer,
      children:[
       {path:'/home',name:'1',component: IndexHome,},
       {path:'/application',name:'2',component: IndexApplication,},
       {
        path:'/login',
        name:'登陆',
        component:Login,
      }
      ]
    },
  ],
  linkActiveClass: 'mui-active'
  
 
})
