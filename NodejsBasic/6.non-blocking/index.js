//non-blocking

const fs = require('fs')

//อ่านไฟล์ input.txt

fs.readFile('NodejsBasic/6.non-blocking/file/input.txt','utf-8',(err,data) => {
    if(err) return console.log('เกิดข้อผิดพลาด',err)
    console.log(data)

    const outputText = `Hello Node.js \n${data} \nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`

    fs.writeFile('NodejsBasic/6.non-blocking/file/output.txt',outputText,err => {
        if(err) return console.log('เกิดข้อผิดพลาด',err)
        console.log('เขียนไฟล์เรียบร้อย')
    })
})
//เขียนไฟล์

