const fs = require('fs')

// 打开一个文件
fs.open('./bbb.txt',(err, fd) => {
    if(err) {
        console.log('打开文件错误',err)
        return
    }
    // 拿到文件描述符
    console.log(fd)
    //读取文件信息
    fs.fstat(fd, (err, stats) => {
        if(err) {
            console.log('读取文件信息错误',err)
            return
        }
        console.log(stats)
        // 关闭文件
        fs.close(fd, (err) => {
            if(err) {
                console.log('关闭文件错误',err)
                return
            }
            console.log('关闭文件成功')
        })
    })
})
