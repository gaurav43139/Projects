import { useEffect, useState } from "react"
import { RESTAURANTS_API } from "../utils/constants"
import { ShimmerCards } from "../utils/Shimmer";
import Card, { enhancedCard } from "./Card/Card";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const RestaurantOpenStatusCard = enhancedCard(Card);
    console.log(filteredList);

    useEffect(() => {
        fetchData()
    }, [])

    let fetchData = async () => {
        let response = await fetch(RESTAURANTS_API);
        let responseData = await response.json()
        let restaurants = responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants

        setFilteredList(restaurants);
        setListOfRestaurants(restaurants);
    }

    let onlineStatus = useOnlineStatus();

    if (!onlineStatus) {
        return <h1>oops!! no Internet</h1>
    }

    return (filteredList.length === 0)? <ShimmerCards /> : (<div className="cards-container">
        {filteredList.map((eachItem) => <Link to={"/restaurant/"+eachItem.info.id} key={eachItem.info.id}>{eachItem.info.isOpen? <RestaurantOpenStatusCard restaurantData = {eachItem}/> : <Card restaurantData = {eachItem}/>}</Link>)}
    </div>)
}

export default Body