import {fork} from "child_process"
console.log(process.pid)
let worker = fork("./worker.js")
worker.on("message", (message)=>{
	console.log(`Recieved message from worker.js: "${message}"`)
})
setInterval(()=>{
	worker.send("Hello from main process")
},5000)