const Task=require("../Models/task")
const getAllData=async (req,res)=>{
   
        try{
            const task=await Task.find({});
res.status(200).json({task});
}catch(error){
    res.status(500).json({msg:error});
}
}
const createData=async (req,res)=>{
    try{
        const task=await Task.create(req.body);
res.status(201).json({task});
    }
    catch(error){
        res.status(500).json({msg:error}); 
       }
    };

    

const getData=async (req,res)=>{
    try{
        const {id:taskID}=req.params;
        const task=await Task.findOne({_id:taskID});
        if (!task){
            return res.status(404).json({msg:`No task with id:${taskID}`});
        }
        res.status(200).json({task});
        
            }catch (error)
            {
                res.status(500).json({msg:error});
        
            }
        
        };

const updateData=async(req,res)=>{
    try{
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
       
        
            }catch (error)
            {
                res.status(500).json({msg:error});
        
            }
        
        };
const deleteData=async(req,res)=>{
    try{
const {id:taskID}=req.params;
const task=await Task.findOneAndDelete({_id:taskID});
if (!task){
    return res.status(404).json({msg:`No task with id:${taskID}`});
}
res.status(200).json({task});

    }catch (error)
    {
        res.status(500).json({msg:error});

    }

};
module.exports={getAllData,getData,createData,updateData,deleteData}