module.exports = {
    devServer: {
        port: 8085, // 修改dev环境启动端口号
        // proxy: 'http://localhost:9090' //  将请求到后端服务器
        proxy: {
            // 将key的路径代理到taget
            "api": {
                target: 'http://localhost:9090',
                changeOrigin: true,
                pathRewrite: { // 修改路径数据
                    ['^' + '/api']: '' // '^/api':'' 可以将/api从路径中去除
                }
            }
        }
    }
}