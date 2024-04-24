import express from "express"

const app = express()

console.log(`from index ${process.pid}`)
app.get("/heavy", (request, response)=>{
	let sum=0
	for(let i=0; i<5_000_000_000; i++){
		sum++
	}

	response.send(`sum is ${sum}\n`)

})


app.get("/home", (request, response)=>{
	console.log("Home page required!")
	response.send("Home page\n")
})

app.listen(3000, ()=>{
	console.log(`server works on 3000 port`)
})