import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/script/components/Index'
import Board from '@/script/components/board'
import Sort from '@/script/components/sort'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
      	{
      		path:'board',
      		component:Board
      	},
      	{
      		path:'sort',
      		component:Sort
      	}
      ]
    }
  ]
})
