import { fetchMenuItemsbyId } from "@/actions";
import MenuPageComponents from "@/components/menu";

export default async function Menu2(slug){
    const menuItems=await fetchMenuItemsbyId(slug.params.slug);
    return(
        <MenuPageComponents menuItems={menuItems}/>
    )
}