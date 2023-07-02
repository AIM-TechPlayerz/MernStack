import { connectDatabase } from "@/database";
import { Feedback } from "../../../model/feedback";



export default async function handler(req,res)
{
    await connectDatabase();
    if(req.method === "POST") {
        const {email, feedback} = req.body;
        const review = await Feedback.create({
            email,
            feedback,
        }
        );
        res.status(201).json({ success: true, review});

    }
    else{
        res.status(405).json({success: false, message: "Method Not Allowed"})
    };
}
