<template>
	<div>
		<h3>当前最新的count值为：{{count}}</h3>
		<button @click="btnandler1">-1</button>
		<button @click="btnandler2">-3</button>
		<button @click="btnandler3">延迟-3</button>
	</div>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapActions,
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		computed: {
			...mapState(['count']),
		},
		methods: {
			...mapMutations(['subN']),
			...mapActions(['subTimeOut']),
			btnandler1() {
				//这种方法是不推荐的
				this.$store.state.count--
			},
			btnandler2() {
				this.subN(3);
			},
			btnandler3() {
				this.subTimeOut(3000);
			}
		}
	}
</script>

<style>
</style>
