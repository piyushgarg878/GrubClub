import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import createRestaurant from "@/actions";

export default function HeroHeader1() {
    
    return(
        <div>
            <div className="m-[100px] mt-[80px]  h-[70vh] flex justify-between">
                <div className="flex-row w-1/2  mt-[50px] ">
                <div className=" text-5xl font-bold">Delicious Food Delivered Right To your Doorstep</div>
                <div className="font-system mt-[20px]">Welcome to Grub club ,Where you can indulge in Wide Variety of MouthWatering dishes.Explore our menu and satify your creavings today!</div>
                <div className="mt-[40px] flex gap-4">
                <Link href="/restaurants"><Button>Explore</Button></Link>
                <Link href="/sign-in"><Button  className="bg-[#FFF3DE] border-2 border-black text-black hover:bg-[#FFF3DE] hover:bg-opacity-20">Sign up</Button></Link>
                </div>
                </div>
                <div className="w-1/2 h-full"><Image src="/mainimg.jpg" width={1000} height={1000}></Image></div>
            </div>
        </div>
    )
}