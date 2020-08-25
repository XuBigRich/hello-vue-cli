import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0
	},
	//mutations 函数第一参数永远指向的是state，第二个参数才是其他函数调用的参数
	mutations: {
		add(state) {
			state.count++;
		},
		add(state, step) {
			state.count += step
		},
		subN(state, step) {
			state.count -= step
		}

	},
	actions: {
		//actions 函数第一参数永远指向的是mutations，第二个参数才是其他函数调用的参数
		addTimeOut(context, time) {
			new Promise(() => {
				setTimeout(() => {
					context.commit('add', 3)
				}, time);
			}).then(() => {
				console.log("执行完毕")
			});
		},
		subTimeOut(context, time) {
			setTimeout(() => {
				context.commit('subN', 3)
			}, time);
		}
	},
	getters:{
		showNum(state){
			return "当前最新的数量加一："+(state.count+1);
		}
	}
})

export default store
