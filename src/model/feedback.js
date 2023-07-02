import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
        },
        feedback: {
            type: String,
            required: true
        }
    }
);

mongoose.models = {};
export const Feedback = mongoose.model("Feedback",feedbackSchema);