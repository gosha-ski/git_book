import {fork} from "child_process"
import express from "express"

let app = express()

let workers = []

for(let i=0; i<4; i++){
	let child = fork("./worker.js")
	workers.push(child)
}

let count = 0
app.use("/", (request, response, next)=>{
	let worker = workers[count]
	//console.log(request)
	worker.send({path: request.path})
	worker.on("message", (data)=>{
		response.send(`data is: ${data}`)
	})
})

app.listen(8080, ()=>{
	console.log("balancer works on 8080")
})