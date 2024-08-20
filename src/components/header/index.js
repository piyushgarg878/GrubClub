'use client'
import Image from "next/image"
import Link from "next/link"

export default function Header({user,profileInfo}){
    const menuItems=[
        {
            label :'Home',
            path :'/',
            show :true
        },
        {
            label :'About',
            path :'/about',
            show :true
        },
        {
            label:'Menu',
            path:'/Menu',
            show:true
        },
        {
            label:'Contact',
            path:'/contact',
            show:true
        },
        {
            label:'Order',
            path:'/order',
            show:true
        },
    ]
    return(
        <nav className="bg-[#FFF3DE] h-[70px] w-full flex items-center justify-center">
            <div className="flex w-[90vw] justify-between m-6">                  
                <div className="flex gap-3">
                    <Image src="/paper-plane.png" alt="logo" width={48} height={48}/>
                    <div className="font-times font-bold text-2xl pt-2">GRUB CLUB</div>
                </div>
                <div className="">
                    <ul className="flex justify-end gap-5">
                        {menuItems.map((item,index)=>(
                            item.show && (
                                <li key={index} className={item.label=='Order'?"bg-[#F8B325] px-6 py-3 rounded-full border-black border-2":"py-3"}><Link href={item.path}>{item.label}</Link></li>)))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}