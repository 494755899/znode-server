const TopicModel = require('../models/topics')
exports.createTopic = async (cxt, next) => {
    try {
        const { content, tab, title } = cxt.request.body
        const result = await TopicModel.addTopic(cxt.request.body)
        cxt.body = {
            success: true,
            data: result,
            message: '发表话题成功'
        }
    } catch (err) {
        console.log(err)
        console.log('error -------------------')
    }
}