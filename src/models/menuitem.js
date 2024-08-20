import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
    restaurantId:String,
    name:String,
    price:Number
})

const MenuItem=mongoose.models.MenuItem || mongoose.model('MenuItem',MenuItemSchema);
export default MenuItem;