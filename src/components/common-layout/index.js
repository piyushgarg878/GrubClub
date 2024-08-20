import Header from "../header";

export default function CommonLayout({children}){
    return(
        <div className="bg-[#FFF3DE] h-full w-full">
            <Header/>
            {children}
        </div>
    )
}