const cluster=require('cluster')
const os=require('os')
const cpus=os.cpus().length
const app=require('./app')
if(cluster.isMaster){
    for(let c=0;c<cpus;c++){
        cluster.fork()
    }
    cluster.on('online', function(worker) {
        console.log('worker:', worker.process.pid, 'is up');
    })
    cluster.on('exit', (worker, code, signal) => {
        if(code !== 0 && !worker.exitedAfterDisconnect) {
            console.log('Starting new worker:', worker.process.pid, + 'signal:', signal);
            cluster.fork();
        }
    })
}
else{
    app.Init()
}