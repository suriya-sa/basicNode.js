// โปรแกรม Download

const url1 = "suriya/file1.json"
const url2 = "suriya/file2.json"
const url3 = "suriya/file3.json"
const url4 = "suriya/file4.json"
const url5 = "suriya/file5.json"

function dowloading(url,callback){
	console.log(`Downloading... ${url}`)	
	setTimeout(()=>{
		callback(url)
	},1000)
}

//function complete(result){
//	console.log(`Download ${result} complete`)
//}

dowloading(url1,function(result){
	console.log(`Download ${result} complete`)
	dowloading(url2,function(result){
		console.log(`Download ${result} complete`)
		dowloading(url3,function(result){
			console.log(`Download ${result} complete`)
			dowloading(url4,function(result){
				console.log(`Download ${result} complete`)
				dowloading(url5,function(result){
					console.log(`Download ${result} complete`)
				})
			})
		})
	})
})