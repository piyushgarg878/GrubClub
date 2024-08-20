'use client'
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious,} from "@/components/ui/carousel"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import Cart from "../cart/cart";
    
export default function RestoPage({restaurants}){
    return(
        <div>
            <div className="flex flex-col justify-end text-4xl font-bold h-[25vh] align-baseline">Explore all our Restaurants</div>
            <hr className="border-black border-5"/>
            <div>
               <div className=" m-[80px] mt-[20px] min-h-[250px]">
               <Carousel className="flex justify-center 1/2">
                
                <CarouselContent className="justify-center">
                    {restaurants.map((restaurant,index)=>(
                        <CarouselItem  className=" lg:basis-1/3"key={index}>
                            <Card className="bg-black">
                                <CardHeader>
                                    <CardTitle className="text-white">{restaurant.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-white">{restaurant.description}</CardDescription>
                                    <Image src="/download.jpeg" width={50} height={50} alt={restaurant.name} className="w-full h-[200px] object-cover"/>
                                </CardContent>
                                <CardFooter>
                                    <div className="w-full flex justify-between text-white">
                                        <div className="mr-2">{restaurant.location}</div>
                                        <div>{restaurant.ratings}</div>
                                        <Link href={`/menu/${restaurant._id}`}><Button className="bg-white text-black">See Menu</Button></Link>
                                    </div>
                                </CardFooter>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext/>
                <CarouselPrevious/>
            </Carousel>
               </div>
            </div>
            <Cart/>
        </div>
        
    )
}