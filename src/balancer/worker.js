// process.on("message", (message)=>{
// 	console.log(`Recieved message ${message}`)
// })
console.log("Helo from worker.js", process.ppid)
process.send("Hi from child_process!)")
process.on("message", (message)=>{
	console.log(`Recieved message: "${message}"`)
	//process.send("Hi from child_process!)")
})