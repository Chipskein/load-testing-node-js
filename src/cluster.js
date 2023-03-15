const cluster=require('cluster')
const os=require('os')
const cpus=os.cpus().length
const app=require('./app')
if(cluster.isMaster){
    for(let c=0;c<cpus;c++){
        cluster.fork()
    }
}
else{
    app.Init()
}