<template>
  <div id="app">
	  <router-link class="roter" to="/main">路由的学习</router-link>
	  <router-link class="vuex" to="/store">vuex的学习</router-link>
	  <router-link class="watch" to="/watch">监听</router-link>
	  <router-view></router-view>
  </div>
</template>

<script>

export default {
}
</script>

<style>
.roter{
	
}
.vuex{
	margin:10px 5px 15px 20px;
}
</style>
