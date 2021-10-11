const Sequelize = require('sequelize')

const conf = {
    host: 'localhost',
    // 資料庫廠牌
    dialect: 'mysql'
}

// 線上環境專用 . 使用連接池
conf.pool = {
    max: 5, //連接池最大連線數量
    min: 0, //最小連線數
    idle: 10000 //如果連線10s內沒被使用會被釋放

}

// (db名,帳號,密碼,config)
const seq = new Sequelize('koa2_weibo_db', 'root', 'longyao7639', conf)


// 測試連結 . 回傳為promise
// seq.authenticate().then(()=>{
//     console.log('ok');
// }).catch(()=>{
//     console.log('err');
// })

// 測試連結時要mark掉
module.exports = seq