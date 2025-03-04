const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: 'http://api.forismatic.com',
      changeOrigin: true,
      pathFilter: '/api',
    })
  )
}
