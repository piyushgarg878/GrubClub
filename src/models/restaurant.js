import mongoose from "mongoose";

const RestaurantSchema = new mongoose.Schema({
    name:String,
    location:String,
    description:String,
    images:[],
    ratings:Number
})

const Restaurant=mongoose.models.Restaurant || mongoose.model('Restaurant',RestaurantSchema);
export default Restaurant;