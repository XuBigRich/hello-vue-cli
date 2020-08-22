<template>
	<div>
		<p>hello world!</p>
		<!-- 他控制的是主页面的路由渲染 -->
		<ul>
			<li>
				<router-link to="out">对照试验页面</router-link>
			</li>
			<li>
				<router-link to="/main/user">查看页面作者</router-link>
			</li>
			<li>
				<router-link :to="{name:'home',params:{id:'001'},query:{aaa:'bbb'},path:'/ccc/1'}">Home</router-link>
			</li>
			<li>
				<router-link :to="{path:'/bbb/1'}">redirect</router-link>
			</li>
			<li>
				<button @click="req">axios</button>
			</li>
			<li>
				<router-link :to="{path:'/es6'}">es6 js</router-link>
			</li>
		</ul>
		<!-- 他控制的是 本页面的路由渲染 -->
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {

			}
		},
		methods: {
			req() {
				axios.defaults.baseURL="/api"
				axios.get('login', {
						params: {
							username: 'x',
							password: '1'
						},
						head:"Access-Control-Allow-Origin"
					})
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	}
</script>

<style>
</style>
