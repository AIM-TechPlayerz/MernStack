import mongoose from "mongoose";

const connectDatabase =async () => {
   try{
       const {connection}= mongoose.connect("mongodb+srv://haidertecheducation:DG9D3VEcb1IXX5zU@student.oyst17p.mongodb.net/?retryWrites=true&w=majority",{
            dbName:"student",
        })
   }    
   catch (error){
    console.log(`database connection eror: ${error.message}`)
   }
}

export default connectDatabase;