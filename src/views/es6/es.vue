<template>
	<div>
		<input v-model="a">a的值</input>
		<input v-model="b">b的值</input>
		<div>c&&:{{c}}</div>
		<div>d||:{{d}}</div>
		<div>e:{{e}}</div>
		<button @click="yu">与运算 并判断是否进入if方法</button>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				a: "",
				b: '',
				c: '',
				d: '',
				e:''
			}
		},
		methods: {
			yu() {
				
				
				//如果a存在返回/不存在a
				this.c = this.a && '/'
				//如果b存在返回b 不存在返回/
				this.d = this.b || '/'
				// 如果为空 则为false  如果不为空则为true
				if(""){
					this.e="进入了"
				}
				//总结解释：
				/**
				 * 之所以可以这样写，是因为在es6中 ，如果有值默认为true ，如果默认没值则 为false。
				 * 再跟剧&&与||特性，&&判断了第一个值为false后，只需要返回第二个值即可。
				 * 而||只需要判断第一个值为true后，就可以返回了
				 * 
				 */
				/**
				 * a() && b()

				如果执行a()后返回true，则执行b()并返回b的值；如果执行a()后返回false，则整个表达式返回a()的值，b()不执行；

				a() || b()

				如果执行a()后返回true，则整个表达式返回a()的值，b()不执行；如果执行a()后返回false，则执行b()并返回b()的值；

				a() && b() || c()

				如果执行a()后返回true,则执行b()并返回b的值，不执行c()；如果执行a()后返回false，则执行c()并返回c()的值；

				&& 优先级高于 ||；
				 */

				// 具体可以参考下面这个方法
				// const o = {v: 100};
				// if (o) {
				//     console.log('有值：' + v.o)
				// } else {
				//     console.log('无值')
				// }
			}
		}
	}
</script>

<style>
</style>
