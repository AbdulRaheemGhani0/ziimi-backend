import express from "express"
const router = express.Router();
//  const Task from "../models/Task.js"
 import Task from "../models/Task.js"
import sendResponce from "./helpers/sendResponce.js";



 router.post ("/", async (req, res) =>{
    const {task} = req.body;
    let NewTask = new Task({task});
    NewTask =await NewTask.save();
    sendResponce(res ,201 ,newTask ,false,"Task added successfully")
    
 })


 router.get ("/", async (req, res) =>{
    Task =await Task.find();
    sendResponce(res ,200 ,newTask ,false,"Task Fetched successfully")
    
 })
 
 export default router;