const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        createProxyMiddleware( {
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
};

//커밋아 되어라~!!!!