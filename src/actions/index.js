'use server'
import connecttoDb from "@/database"
import MenuItem from "@/models/menuitem";
import Order from "@/models/order";
import Restaurant from "@/models/restaurant"
import { revalidatePath } from "next/cache";

// export default async function createRestaurant(data,pathtorevalidate){
//     await connecttoDb();
//     await Restaurant.create(data);
// }
// export  async function createMenuItem(data){
//     await connecttoDb();
//     await MenuItem.create(data);
// }

export async function fetchRestaurants(){
    await connecttoDb();
    const result=await Restaurant.find();
    return JSON.parse(JSON.stringify(result));
}
export async function fetchMenuItemsbyId(id){
    await connecttoDb();
    const result=await MenuItem.find({restaurantId:id});
    return JSON.parse(JSON.stringify(result));
}
export async function placeorder(data){
    await connecttoDb();
    await Order.create(data);
}