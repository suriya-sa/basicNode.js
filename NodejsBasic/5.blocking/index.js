//Blocking

const fs = require('fs')

//อ่านไฟล์ input.txt

const data = fs.readFileSync('NodejsBasic/5.blocking/file/input.txt','utf-8')
console.log(data)

//เขียนไฟล์

const outputText = `Hello node.js \n${data} \nไฟล์นี้ถูกเขียนเมื่อ${new Date()}`
fs.writeFileSync('NodejsBasic/5.blocking/File/output.txt',outputText)
console.log('เขียนไฟล์เสร็จเรียบร้อย')