const router = require('koa-router')()
const { 
  signUp,
  signIn
 } = require('../controllers/sign')
router.prefix('/users')

// router.get('/signUp', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

router.post('/signUp', signUp)

router.post('/signIn', signIn)

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
