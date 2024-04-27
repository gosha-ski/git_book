import express from "express"
import fetch from 'node-fetch';

let app = express()

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let PORT = randomInteger(1000,9000)

process.on("message", (data)=>{
	let path = data.path
	console.log(path)
	fetch(`http://localhost:${PORT}${path}`)
})

app.get("/heavy", (request, response)=>{
	console.log("GET")
	//response.send("GET heavy")
	let sum=0
	for(let i=0; i<1_000; i++){
		sum++
	}
	process.send(`Sum is ${sum}`)
})

app.listen(PORT, ()=>{
	console.log(`worker statrs ${PORT}`)
})