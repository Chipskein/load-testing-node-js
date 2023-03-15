const crypto=require('crypto');
const path=require('path');
const fs=require('fs');
const fsP=require('fs/promises');

module.exports={
    async create(_,res){
        try{
            const randomname=`file-${Math.random()*99999}`
            const datafile_path=`${path.resolve()}/fastify/src/data/${randomname}.txt`
            const data=crypto.randomBytes(10000)
            const stream=fs.createWriteStream(datafile_path)
            await new Promise(fulfill => stream.write(data, fulfill));
            return res.status(200).send({path:datafile_path})
        }
        catch(err){
            const statusCode= err.status | 500
            return res.status(statusCode).send(err)
        }
    },
    async read(req,res){
        try{
            const { path } =req.query
            const buffer=await fsP.readFile(path)
            return res.status(200).send(buffer)
        }
        catch(err){
            const statusCode= err.status | 500
            return res.status(statusCode).send(err)
        }
    },
    async delete(req,res){
        try{
            const { path } =req.query
            await fsP.rm(path)
            return res.status(200).send('ok')
        }
        catch(err){
            const statusCode= err.status | 500
            return res.status(statusCode).send(err)
        }
    }
}