<template>
	<div>
		<input v-model="demo"></input>
		{{value}}
		<router-link to="/watch/out">路由监听</router-link>
		<!-- <button @click.native.prevent="handleLogin">我也是路由</button> -->
		<button @click="handleLogin">我也是路由</button>
		<button @click="out">我也是路由2</button>
		<input :value="searchValue" />
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'index',
		data() {
			return {
				demo: '',
				value: '',
				searchValue: ''
			};
		},
		/**
		 * 首先确认 watch是一个对象，一定要当成对象来用。
			对象就有键，有值。
			键：就是你要监控的那个家伙，比如说$route，这个就是要监控路由的变化。或者是data中的某个变量。
			
			一：值可以是函数：
				就是当你监控的家伙变化时，需要执行的函数，这个函数有两个形参，第一个是当前值，第二个是变化后的值。
			
			二：值也可以是函数名：
				不过这个函数名要用单引号来包裹。
				
			三：第三种情况厉害了。
			值是包括选项的对象：选项包括有三个。
			1.第一个handler：其值是一个回调函数。即监听到变化时应该执行的函数。
			2.第二个是deep：其值是true或false；确认是否深入监听。（一般监听时是不能监听到对象属性值的变化的，数组的值变化可以听到。）
			3.第三个是immediate：其值是true或false；确认是否以当前的初始值执行handler的函数。
			
			另外watch监听子路由只可以监听本页面的路由 不可以监听重定向到其他页面的路由
		 */
		watch: {
			//一
			demo(val) {
				this.value = this.demo;
			},
			//二
			'$route': 'getPath',
			//三
			$route: {
				handler: function(val) {
					// this.value = route.query && route.query.redirect;
					console.log(val+"--51");
				}
			},
			searchValue: {
				//使用watch值是对象的第三种情况
				handler: "getList",
				//getList里面通过searchValue去搜索数据库
				immediate: true
			}
		},
		methods: {
			handleLogin() {
				console.log("hello ");
				this.$router.push({
					path: "/watch/monitor"
				});
				console.log("hello ");
			},
			out() {
				this.$router.push({
					path: "{ path: this.redirect || '/' }"
				});
			},
			getPath() {
				console.log(this.$route.path);
			},
			getList(value) {
				console.log(value);
			}
		}

	};
</script>
