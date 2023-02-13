//callback funtion

function calculate(x,y,callback){
	console.log("กำลังคำนวณ...")
	setTimeout(()=>{
		const sum = x+y
		callback(sum)
	},1000)
}

//function display(result){
//	console.log(`ผลบวก = ${result}`)
//}*

//ฟังก์ชันแบบ callback
calculate(100,50,function(result){
	console.log(`ผลบวก  = ${result}`)
})
