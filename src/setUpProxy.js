const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api', //proxy가 필요한 path parameter를 입력합니다.
        createProxyMiddleware({
            target: 'http://localhost:8080', //타겟이 되는 api
            changeOrigin: true, //대상 서버 구성에 따라 호스트
            pathRewrite : {
                "^/api" : "",
            }
        })
    );
};