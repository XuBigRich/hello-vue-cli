<template>
	<div>
		<div-addition></div-addition>
		<h3>================================</h3>
		<h3>简单的方式：{{$store.getters.showNum}}</h3>
		<h3>Hello World! </h3>
		<h3>导入的方式：{{showNum}}</h3>
		<h3>================================</h3> 
		<my-subtraction></my-subtraction>
	</div>
</template>

<script>
	import addition from "../../components/Addition.vue"
	import subtraction from "../../components/Subtraction.vue"
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {}
		},
		computed: {
			...mapGetters(['showNum'])
		},
		components: {
			'div-addition': addition,
			"my-subtraction": subtraction
		}
	}
</script>

<style>
</style>
