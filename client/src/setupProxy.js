const { createProxyMiddleware } = require('http-proxy-middleware');

//Backend URL
const BE_URL =`${process.env.REACT_APP_BE_URL}`

module.exports = function(app) {
    app.use(
        /^\/(users|rooms|socket.io)/,
        createProxyMiddleware({
            target: BE_URL,
            ws: true
        })
    )
};