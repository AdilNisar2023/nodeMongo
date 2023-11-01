const asyncWrapper = require("../Middleware/async");
const Task=require("../Models/task")



const getAllData=asyncWrapper(async (req,res)=>{
            const task=await Task.find({});
res.status(200).json({task});
})
const createData=asyncWrapper(async (req,res)=>{
   
        const task=await Task.create(req.body);
res.status(201).json({task});
    }
    
    );

    

const getData=asyncWrapper(async(req,res)=>{
    
        const {id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`No task with id:${taskID}`});
        }
        res.status(200).json({task});
        
            }
        
        );

const updateData=asyncWrapper(async(req,res)=>{
    
        const {id:taskID}=req.params;
        const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
            new: true,
            runvalidators:true,
        });

        if (!task){
            return res.status(404).json({msg:`No task with id:${taskID}`});
        }
        else{
            res.status(200).json({task:task});
        }
       
        
            }
        
        );
const deleteData=asyncWrapper(async(req,res)=>{
    
const {id:taskID}=req.params;
const task=await Task.findOneAndDelete({_id:taskID});
if (!task){
    return res.status(404).json({msg:`No task with id:${taskID}`});
}
res.status(200).json({task});

    }
);
module.exports={getAllData,getData,createData,updateData,deleteData}