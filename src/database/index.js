import mongoose from "mongoose";

const connecttoDb=async()=>{
    const connectionUrl="mongodb+srv://piyushgarg878:piyush878@cluster0.irzsv.mongodb.net/";
    mongoose.connect(connectionUrl).then(()=>{
        console.log('Connected to Grub Club');
    }).catch((err)=>{
        console.log('Error connecting to Grub Club',err);
    })
}

export default connecttoDb;