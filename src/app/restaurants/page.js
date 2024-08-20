import { fetchRestaurants } from "@/actions";
import RestoPage from "@/components/restaurants";

export default async function RestaurantsPage(){
    const restaurants=await fetchRestaurants();
    return(
        <RestoPage restaurants={restaurants}/>
    )
}