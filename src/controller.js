const crypto=require('crypto');
const path=require('path');
const fs=require('fs');
const fsP=require('fs/promises');

module.exports={
    async createAndDeleteFile(_,res){
        try{
            const randomname=`file-${Math.random()*999}`
            const datafile_path=`${path.resolve()}/src/data/${randomname}.txt`
            const data=crypto.randomBytes(10000)
            const stream=fs.createWriteStream(datafile_path)
            await new Promise(fulfill => stream.write(data, fulfill));
            fsP.rm(datafile_path)
            return res.status(200).json("ok")
        }
        catch(err){
            const statusCode= err.status | 500
            return res.status(statusCode).json(err)
        }
    },
  
}