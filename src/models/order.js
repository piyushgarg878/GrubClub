import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    items:[],
    orderstatus:String,
    totalAmount:Number,
})

const Order=mongoose.models.Order || mongoose.model('Order',orderSchema);
export default Order;