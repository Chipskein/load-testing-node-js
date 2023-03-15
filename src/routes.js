const express=require("express")
const router=express.Router()
const controller=require('./controller')
router.get('/create',controller.create)
router.get('/read',controller.read)
router.get('/delete',controller.delete)
module.exports=router