const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: String,
    passWord: Number,
    email: String,
})
UserSchema.statics.addUser = function (userInfo) {
   return this.create(userInfo)
}

UserSchema.statics.getUserInfo = function (userInfo) {
   return this.findOne(userInfo)
}
module.exports = mongoose.model('User',UserSchema)