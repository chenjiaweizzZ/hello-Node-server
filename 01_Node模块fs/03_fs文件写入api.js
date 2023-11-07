const fs = require('fs')

const content = "hello Jern Chan"

//文件写入操作
// w打开文件写入
// w+打开文件进行读写
// r打开文件读取
// r+打开文件进行读写
// a打开文件追加
// a+打开文件进行读写
fs.writeFile('./ccc.txt', content, {
    encoding: 'utf-8',
    flag: 'a+'
},(err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('write success')
    }
})