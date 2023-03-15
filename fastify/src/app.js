const fastify=require('fastify')
const app=fastify()
const controller=require('./controller')
const port=8082
module.exports={
    Init(){
        app.get('/create',controller.create)
        app.get('/read',controller.read)
        app.get('/delete',controller.delete)
        app.listen({port},()=>{
            console.log("Iniiciando servidor na porta ",port,'com pid ',process.pid)
        })
    }
}
