const http = require('http')
const fs = require('fs')

const indexPage = fs.readFileSync('webpages/index.html');
const productPage = fs.readFileSync('webpages/product.html');
const product1 = fs.readFileSync('webpages/product1.html');
const product2 = fs.readFileSync('webpages/product2.html');
const product3 = fs.readFileSync('webpages/product3.html');

const server = http.createServer((req,res) => {
    const pathName = req.url
    console.log("URL = ",pathName)
    if(pathName==="/" || pathName==="/home") {
        res.end(indexPage)
    }
    else if (pathName==="/product.html"){
        res.end(productPage)
    }
    else if (pathName==="/product1.html"){
        res.end(product1)
    }
    else if (pathName==="/product2.html"){
        res.end(product2)
    }
    else if (pathName==="/product3.html"){
        res.end(product3)
    }
    else{
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})

server.listen(8000,'localhost',() => {
    console.log('start server in port 80000')
})