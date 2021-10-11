const { User, Blog } = require('./model')

!(async function () {

    // 刪除一條博客
    const delBlogRes = await Blog.destroy({
        where: {
            id: 4
        }
    })
    // 新增成功後回傳新增值
    console.log('delBlogRes', delBlogRes > 0);

    // 刪除一個用戶
    const delUserRes = await User.destroy({
        where: {
            id: 1
        }
    })
    // 新增成功後回傳新增值 . 報錯是因為有關聯資料所以不讓刪
    console.log('delUserRes', delUserRes);


})()