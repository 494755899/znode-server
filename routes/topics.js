const router = require('koa-router')()
const { 
  createTopic
} = require('../controllers/topic')

router.prefix('/topics')

router.post('/createTopic', createTopic)


module.exports = router
