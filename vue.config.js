'use strict'
const path = require('path')
const port = process.env.port || process.env.npm_config_port || 8081 // dev port
module.exports = {
    lintOnSave: false, // eslint-loader 是否在保存的时候检查
    devServer: {    //输入npm run serve 自动打开浏览器
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
    },
}