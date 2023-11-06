const fs = require('fs')

// 同步读取
// 不加上encoding:'utf-8'会导致输出的都是二进制
// const res1 = fs.readFileSync('./abc.txt',{
//     encoding:'utf-8'})
// console.log(res1)
// console.log('后续代码')

//异步代码
// fs.readFile('./abc.txt',{
//     encoding:'utf-8'
// },(err,res)=>{  
//     if(err) {
//         console.log('读取文件失败',err)
//         return
//     }else {
//         console.log('读取文件成功',res)
//         return
//     }
// })
// console.log('后续代码')
// 后续代码
// 读取文件成功 123

// promise
fs.promises.readFile('./abc.txt',{ encoding: 'utf-8'}).then(res => {
    console.log(res)
}).catch(err => {
    console.log('读取文件失败',err)
})

