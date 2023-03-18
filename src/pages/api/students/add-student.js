const { default: connectDatabase } = require("@/database/connectDatabase")
import { Student } from "@/models/student";

export default async function handler(req,res){
    await connectDatabase();
    if (req.method === "POST"){
        const {name,email,phone_number,address,description} = req.body;
        const Student = await Student.create(
            {
                name,
                email,
                phone_number,
                address,
                description,
            }
        )
        res.status(201).json({success: true, Student})
    }
    else{
        res.status(405).json( { success: true ,message: "NOT ALLOWED"});
    }
}