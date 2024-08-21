import { IMAGE_URL_PREFIX } from "../../utils/constants";

const Card = ({ restaurantData }) => {
  const info = restaurantData.info;

  return (
    <div className="Card">
      <div className="restaurant-logo-wrapper">
        <img
          className="restaurant-logo"
          src={IMAGE_URL_PREFIX + info?.cloudinaryImageId}
          alt="restaurant-image"
        />
        <div className="offer-info-container">
          <h3 className="offer-info">
            {info?.aggregatedDiscountInfoV3?.header || ""}{" "}
            {info?.aggregatedDiscountInfoV3?.subHeader || ""}
          </h3>
        </div>
      </div>
      <div className="rest-details">
        <div className="restaurant-name">{info?.name}</div>
        <div>
          <span className="avg-rating">{info?.avgRatingString}</span>
          <span className="avg-delhivery-time">{info?.sla?.slaString}</span>
        </div>
        <div className="cuisines">{info?.cuisines.join(", ")}</div>
        <div className="restaurant-loc">{info?.locality}</div>
      </div>
    </div>
  );
};

export const enhancedCard = (Card) => {
  return (props) => {
    return (
      <div>
        <div className="p-2 shadow-green-200 shadow-sm rounded-3xl">
          <Card {...props} />
        </div>
      </div>
    );
  };
};

export default Card;
