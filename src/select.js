const { Blog, User } = require('./model')

!(async function () {

    // // ??select * limit 1.但是!!!只是效果一樣 . 性能卻比較好因為他sql查詢並非用 * 而是列出所有欄位
    // const zhangsan = await User.findOne({
    //     where: {
    //         userName: 'zhangsan',
    //     }
    // })
    // // 新增成功後回傳新增值
    // console.log('zhangsan', zhangsan.dataValues);

    // // ??select 指定欄位 limit 1
    // const zhangsanName = await User.findOne({
    //     attributes: ['userName', 'nickName'],
    //     where: {
    //         userName: 'zhangsan',
    //     }
    // })
    // console.log('zhangsanName', zhangsanName.dataValues);

    // // ??select 所有筆數
    // const zhangsanBlogList = await Blog.findAll({
    //     where: {
    //         userId: 1,
    //     },
    //     order: [
    //         // 可寫多組條件
    //         ['id', 'desc']
    //     ]
    // })
    // console.log('zhangsanName', zhangsanBlogList.map(blog => blog.dataValues))

    // // ??分頁功能(沒總筆數)
    // const blogPageList = await Blog.findAll({
    //     limit: 2, //一頁兩筆
    //     offset: 2, //跳過幾筆
    //     order: [
    //         // 可寫多組條件
    //         ['id', 'desc']
    //     ]
    // })
    // console.log('blogPageList', blogPageList.map(blog => blog.dataValues))
    // // ??分頁功能(含總筆數)
    // const blogListAndCount = await Blog.findAndCountAll({
    //     limit: 2, //一頁兩筆
    //     offset: 2, //跳過幾筆
    //     order: [
    //         // 可寫多組條件
    //         ['id', 'desc']
    //     ]
    // })
    // console.log('blogListAndCount',
    //     blogListAndCount.count,  //總筆數
    //     blogListAndCount.rows.map(blog => blog.dataValues))

    // ??連表查詢 一對多
    const blogListWithUesr = await Blog.findAndCountAll({
        order: [
            // 可寫多組條件
            ['id', 'desc']
        ],
        include: [
            {
                model: User,
                attributes: ['userName', 'nickName'],
                where: {
                    userName: 'zhangsan'
                }
            }
        ]
    })
    console.log('blogListWithUesr',
        blogListWithUesr.count,  //總筆數
        blogListWithUesr.rows.map(blog => {
            const blogVal = blog.dataValues
            blogVal.user = blogVal.user.dataValues
            return blogVal
        }))

    // ??連表查詢 多對一
    const userListWithBlog = await User.findAndCountAll({
        attributes: ['userName', 'nickName'],
        include: [
            {
                model: Blog
            }
        ]
    })
    console.log('userListWithBlog',
        userListWithBlog.count,  //總筆數
        userListWithBlog.rows.map(user => {
            const userVal = user.dataValues
            userVal.blogs = userVal.blogs.map(blog => blog.dataValues)
            return userVal
        })
    )
})()