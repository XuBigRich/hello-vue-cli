import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Main from '@/views/home/home'

Vue.use(Router)

export default new Router({
	routes: [
		// { path: '/', name: 'home', component: Main },
		{
			path: '/main',
			name: 'Main',
			component: Main,
			children:[{
				path: 'user',
				//懒加载
				component: (resolve) => require(['@/views/user/user'], resolve)
			}]
		},
		{
			path: '/out',
			name: 'out',
			component: (resolve) => require(['@/views/out/out'], resolve)
		}
	]
})
