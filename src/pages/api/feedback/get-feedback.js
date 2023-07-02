// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDatabase from "../../../database/connectDatabase";
import { Feedback } from "@/models/feedback";

export default async function handler(req, res) {
  await connectDatabase();
  // get the list of students from the database
  try {
    if (req.method === "GET") {
      const feedback = await Feedback.find();
      res.status(200).json({ success: true, feedback });
    } else {
      res.status(405).json({ success: false, message: "Method not allowed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}



//  id ---> delete 
// id ---> update
// id ---> get
