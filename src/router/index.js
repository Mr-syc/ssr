import Vue from 'vue'
import Router from 'vue-router'

import Index from "@/components/index.vue"
import detail from "@/components/detail.vue";


Vue.use(Router)

//这里为什么不导出一个router实例?
//每次用户请求都需要创建一个新的router实例，所以这也是服务器负载变大的原因
export default function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {path: '/',component: Index},
      {path: '/detail',component:detail}
    ]
  })
}