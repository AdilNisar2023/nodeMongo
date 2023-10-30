const express=require('express')
const{getData,updateData,deleteData, createData, getAllData}=require('../controller/control');
const router=express.Router();
router.get('/',getAllData)
router.post('/',createData)
router.get('/:id',getData)
router.patch('/:id',updateData)
router.delete('/:id',deleteData)
module.exports=router;
