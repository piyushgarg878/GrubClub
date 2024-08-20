// app/components/Cart.js

"use client";

import { useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { placeorder } from "@/actions";
import { useToast } from "../ui/use-toast";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const router=useRouter();
  const { toast } = useToast();
  async function handleclick(){
    const data={
      items:cartItems,
      orderstatus:"pending",
      totalAmount:totalAmount
    }
    await placeorder(data);
    toast({
      description: "Your order has been placed successfully",
    })
    router.push("/");
  }
  return (
    <Drawer className="">
      <DrawerTrigger asChild>
        <Button className="bg-black text-white fixed bottom-4 right-4 h-[140px] w-[140px]"variant="outline">View Cart</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div>
          <h2>Your Cart</h2>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} x ${item.price} = $
                {item.totalPrice}
              </li>
            ))}
          </ul>
          <Button onClick={handleclick}>Place Order</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
