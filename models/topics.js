const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
    title: String,
    tab: String,
    content: String,
    Date: {
        type: Date,
        default: Date.now()
    }
})
TopicSchema.statics.addTopic = function (topicInfo) {
   return this.create(topicInfo)
}

module.exports = mongoose.model('Topic',TopicSchema)