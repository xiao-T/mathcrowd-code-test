/**
 * server
 * by xiaoT
 */

const Koa = require('koa')
const static = require('koa-static')
const Router = require('koa-router')
const app = new Koa()
const port = process.env.PORT || 8080
const router = new Router()

// static middleware
app.use(static('./build'))
// route config
router.get('/api/mock', (ctx) => {
  ctx.body = {
    code: 200,
    message: 'ok',
    data: 'mock data'
  }
})
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(port)

console.log(`server run on port: ${port}`)
