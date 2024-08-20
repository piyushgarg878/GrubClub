'use client';
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import { Button } from "../ui/button";
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/cartSlice';
import Cart from "../cart/cart";
  
export default function MenuPageComponents({menuItems}){
    const dispatch=useDispatch();
    const handleAddToCart = (item) => {
        dispatch(addItem(item));
        };
    return(
        <div>
        <div className="flex flex-col justify-end text-4xl font-bold h-[25vh] align-baseline">Explore Menu</div>
        <hr className="border-black border-5"/>
        <div>
           <div className=" m-[80px] mt-[20px] min-h-[250px]">
            <ul className="grid grid-cols-3">
                {
                    menuItems?
                    menuItems.map((item,index)=>(
                        <li className="p-5" key={index}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{item.name}</CardTitle>
                                </CardHeader>
                                <CardFooter>
                                    <div className="w-full flex justify-between">
                                        <div className="text-lg font-bold">{item.price}</div>
                                        <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </li>
                    )):null
                }
            </ul>   
                       
           </div>
        </div>
        <Cart className="absolute bottom-4 right-4"/>  
    </div>
    )
}