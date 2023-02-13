//async & await funtion
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

async function start(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
    console.log(await downloading(url4))
    console.log(await downloading(url5))
}

start()