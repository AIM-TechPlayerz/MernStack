import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:"string",
        required:"true"
    },
    phone_number:{
        type:"string",
        required:"true"
    },
    email:{
        type:"string",
        required:"true"
    },
    address:{
        type:"string",
        required:"true"
    },
    description:{
        type:"string",
        required:"true"
    },
});
mongoose.model = {}
export const Student = mongoose.model=("Student",studentSchema)
