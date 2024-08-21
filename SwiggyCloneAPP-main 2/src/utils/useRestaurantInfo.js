import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantInfo = (resId) => {
  const [resInfo, setResInfo] = useState({ resData: null, menuCategoryData: null });

  useEffect(() => {
    console.log("in useEffect with resId:", resId);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("Fetching data from:", MENU_URL + resId);
      const response = await fetch(MENU_URL + resId);
      const data = await response.json();

      console.log("Fetched data:", data);

      const menuData = data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const resData = data?.data;

      console.log("menuData:", menuData);
      console.log("resData:", resData);

      const requiredMenuInfo = menuData.filter(
        (eachItem) =>
          eachItem.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      console.log("Filtered menu categories:", requiredMenuInfo);

      setResInfo({ resData: resData, menuCategoryData: requiredMenuInfo });
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return resInfo;
};

export default useRestaurantInfo;
