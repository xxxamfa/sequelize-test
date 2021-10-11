const { User } = require('./model')

!(async function () {

    const updateRes = await User.update({

        nickName: '張三',
    }, {
        where: {
            userName: 'zhangsan'
        }
    })
    // 新增成功後回傳新增值
    console.log('updateRes...', updateRes[0] > 0);
})()