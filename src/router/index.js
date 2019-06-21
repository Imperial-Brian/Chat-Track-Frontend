import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Counter from '../components/Counter'
import Todolist from '../components/Todolist'
import ShowMessage from '../components/ShowMessage'

import Chart from '../components/Chart';
import Personal from '../components/Personal';
import Ledger from '../components/Ledger';
import RobotSetting from '../components/RobotSetting';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/todolist',
      name: 'Todolist',
      component: Todolist,
    },
    {
      path: '/chart',
      name: 'Chart',
      component: Chart,
    },
    {
      path: '/ledger',
      name: 'Ledger',
      component: Ledger,
    },{
      path: '/chart',
      name: 'Statistic charts',
      component: Chart,
    },{
      path: '/robot',
      name: 'ShowMessage',
      component: RobotSetting,
    },{
      path: '/personal',
      name: 'Personal page',
      component: Personal,
    },

  ]
})
