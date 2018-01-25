const UserModel = require('../models/users')
exports.signUp = async (ctx, next) => {
    try {
        let { userName, passWord } = ctx.request.body
        const result = await UserModel.addUser({ userName, passWord })
        ctx.body = {
            success: true,
            data: result,
            message: '保存成功'
        }
    } catch(error) {
        console.log(error)
        console.log('error---------------------')
    }
}

exports.signIn = async (ctx, next) => {
    try {
        const { userName, passWord } = ctx.request.body
        const userInfo = await UserModel.getUserInfo({userName,passWord})
        if (!userInfo) {
            ctx.body = {
                success: false,
                message: '账号或者密码错误'
            }
        } else {
            ctx.body = {
                success: true,
                data: userInfo,
                message: '登录成功'
            }
        }
    } catch (err) {
        console.log(error)
        console.log('error---------------------')
    }
}