//promise funtion
//โปรแกรม download

const connect = true //check internet connect 
const url1 = "suriya/file1.json"
const url2 = "suriya/file2.json"
const url3 = "suriya/file3.json"
const url4 = "suriya/file4.json"
const url5 = "suriya/file5.json"

function downloading(url){
    return new Promise(function(resolve, reject){
        console.log(`Downloading... ${url}`)
        setTimeout(() => {
            if(connect){
                resolve(`Download ${url} complete`)
            }
            else{
                reject('Error')
            }
        },1000)       
    })
}

downloading(url1).then(function(result){
    console.log(result)
    return downloading(url2)
}).then(function(result) {
    console.log(result)
    return downloading(url3)
}).then(function(result) {
    console.log(result)
    return downloading(url4)
}).then(function(result) {
    console.log(result)
    return downloading(url5)
}).catch(err => {
    console.log('Error')
}).finally(() => {
    console.log('Finish download')
})