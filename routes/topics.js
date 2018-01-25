const router = require('koa-router')()
const { 
  createTopic
} = require('../controllers/topic')

router.prefix('/v1/topics')

router.post('/createTopic', createTopic)


module.exports = router
