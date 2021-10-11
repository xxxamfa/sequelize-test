const { Blog, User } = require('./model')

// 驚嘆號:避免上一行沒有分號造成斷行錯誤
!(async function () {

    // 創建用戶 insert into Users (...) value (...)
    const zhangsan = await User.create({
        userName: 'zhangsan',
        password: '123',
        nickName: '張三',
    })
    // 新增成功後回傳新增值
    console.log('zhangsan', zhangsan.dataValues);
    const zhangsanId = zhangsan.dataValues.id

    const lisi = await User.create({
        userName: 'lisi',
        password: '123',
        nickName: '李四',
    })

    const lisiId = lisi.dataValues.id
    
    // 創建blog
    const blog1 = await Blog.create({
        title: '標題1',
        content: '內容1',
        userId: zhangsanId,
    })
    console.log('blog1', blog1.dataValues);
    const blog2 = await Blog.create({
        title: '標題2',
        content: '內容2',
        userId: lisiId,
    })
    const blog3 = await Blog.create({
        title: '標題3',
        content: '內容3',
        userId: lisiId,
    })
    const blog4 = await Blog.create({
        title: '標題4',
        content: '內容4',
        userId: zhangsanId,
    })
})()