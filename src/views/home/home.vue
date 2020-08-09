<template>
	<div>
		<p>hello world!</p>
		<!-- 他控制的是主页面的路由渲染 -->
		<router-link to="out">对照试验页面</router-link>
		<!-- 他控制的是 本页面的路由渲染 -->
		<router-link to="/main/user">查看页面作者</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
</script>

<style>
</style>
