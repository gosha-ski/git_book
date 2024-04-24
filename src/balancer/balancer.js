import cluster from 'cluster'
import os from "os"
const numCPUs = os.cpus().length;

cluster.setupMaster({
	exec:"./index.js"
})

for(let i=0; i<numCPUs; i++){
	let worker = cluster.fork()
	console.log(worker.process.pid)
	
}