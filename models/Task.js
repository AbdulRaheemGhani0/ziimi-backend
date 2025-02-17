import mongoose from "mongoose";
const {Schema } = mongoose;


const taskSchema = new Schema (
    {
task: String,
comlpleted:{ type:Boolean, default:false}},
{timestamp :true}
);

const Task = mongoose.model("tasks",taskSchema)
eport default Task;