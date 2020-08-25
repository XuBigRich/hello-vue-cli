<template>
	<div>
		<h3>当前最新的count值为：{{$store.state.count}}</h3>
		<button @click="handlel">+1</button>
		<button @click="handlel1">+3</button>
		<button @click="handlel2">延迟+3</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			handlel() {
				//触发mutations的 第一种方式
				this.$store.commit('add');
			},
			handlel1(){
					this.$store.commit('add',3);
			},
			handlel2(){
					this.$store.dispatch('addTimeOut',3000);
			}
		}
	}
</script>

<style>
</style>
