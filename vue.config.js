module.exports = {
	devServer: {
		proxy: {
			// detail: https://cli.vuejs.org/config/#devserver-proxy
			"/api": {
				// 此处的写法，目的是为了 将 /api 替换成 http://localhost:8080
				target: `http://localhost:8080`,
				// 允许跨域
				changeOrigin: true,
				ws: true,
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
}
