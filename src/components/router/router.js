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
			children: [{
				path: 'user',
				//懒加载
				component: (resolve) => require(['@/views/user/user'], resolve)
			}]
		},
		{
			path: '/out',
			name: 'out',
			component: (resolve) => require(['@/views/out/out'], resolve)
		},
		{
			name: 'home',
			path: '/ccc/:id',
			alias: '/home', //别名
			redirect: xxxx => {
				const {
					name,
					params,
					query,
					path
				} = xxxx;
				console.log(name + " " + params + " " + query + " " + path);
				if (params.id == '001') {
					return '/'
				}
			}
		},
		{
			path: '/bbb/:id',
			redirect: '/out'
		},
		{
			path: "/store",
			component: (resolve) => require(['@/views/vuex/vuex'], resolve)
		},
		{
			path: '/watch',
			component: (resolve) => require(['@/views/watch/watch'], resolve),
			children: [{
					path: "monitor",
					redirect: '/out'
				},
				{
					path: "out",
					component: (resolve) => require(['@/views/out/out'], resolve)
				},
				{
					path: "abc",
					component: (resolve) => require(['@/views/out/out'], resolve)
				}
			]
		},
		{
			path: '/es6',
			component: (resolve) => require(['@/views/es6/es'], resolve)
		}
	]
})
