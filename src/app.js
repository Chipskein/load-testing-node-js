const express=require('express')
const app=express()
const routes=require('./routes')
const port=8081
module.exports={
    Init(){
        app.use('*',(req,res,next)=>{
            console.log(req.method, req.baseUrl)
            next()
        })
        app.use(routes)
        app.listen(port,()=>{
            console.log("Iniiciando servidor na porta ",port,'com pid ',process.pid)
        })
    }
}
