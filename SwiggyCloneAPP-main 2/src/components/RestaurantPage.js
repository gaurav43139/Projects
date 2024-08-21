import { useParams } from "react-router-dom";
import { useState } from "react";
import { ShimmerCards } from "../utils/Shimmer";
import MuiAccordion from "./MuiAccordion/MuiAccordion";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RestaurantPage = () => {
  const { resId } = useParams();
  const { resData, menuCategoryData } = useRestaurantInfo(resId);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (e, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  if (resData === null) {
    return <ShimmerCards />;
  }

  return (
    <div className="restaurant-page-body">
      <div className="restaurant-details-wrapper">
        <div className="restaurant-details">
          <h2 className="restaurant-name">
            {resData?.cards[2]?.card?.card?.info?.name}
          </h2>
          <div className="restaurant-info">
            <span className="ratings">
              {resData?.cards[2]?.card?.card?.info?.avgRatingString}{" "}
              {"(" +
                resData?.cards[2]?.card?.card?.info?.totalRatingsString +
                ")"}
            </span>
            <span className="avg-cost">
              {" • "}
              {resData?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </span>
          </div>
          <div className="cuisines">
            {resData?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
          </div>
        </div>
      </div>
      <div className="menu-label">MENU</div>
      <div className="Menu-items-panels">
        {menuCategoryData.map((eachItem, index) => {
          return (
            <MuiAccordion
              expandedValue={expanded}
              key={index}
              menuPanelDetails={eachItem}
              panelId={index}
              handleChange={handleChange}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantPage;
