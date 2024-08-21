import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../store/cartSlice";
import { MENU_ITEM_IMAGE_PREFIX } from "../utils/constants";

const CartItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  const handleRemove = (eachItem) => {
    dispatch(removeItem(eachItem));
  }; 

  let totalPrice = 0;

  items.forEach((element) => {
    let price = element.card.info?.price / 100 || element.card.info?.defaultPrice / 100;
    totalPrice = totalPrice + price;
  });

  return (
    <div className="w-6/12 m-auto mt-4">
      <div className="flex justify-between">
        <span>Cart Items</span>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div>
        {items.map((eachItem) => {
          return (
            <div key={eachItem.card.info.id} className="menu-item">
              <div className="menu-item-info">
                {eachItem.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                  <img src={""} />
                ) : (
                  <img src={""} />
                )}
                <h3 className="menu-item-name font-semibold text-lg">
                  {eachItem.card.info.name}
                </h3>
                <p className="menu-item-price text-sm text-gray-600 mt-1">
                  Rs.
                  {eachItem.card.info?.price / 100 ||
                    eachItem.card.info?.defaultPrice / 100}
                  /-
                </p>
                <p className="menu-item-rating text-sm text-gray-600">
                  {eachItem.card?.info?.ratings?.aggregatedRating?.rating || ""}{" "}
                  {eachItem.card?.info?.ratings?.aggregatedRating?.ratingCount
                    ? "(" +
                      eachItem.card?.info?.ratings?.aggregatedRating
                        ?.ratingCount +
                      ")"
                    : ""}
                </p>
                <p className="menu-item-description text-xs text-gray-400 my-1">
                  {eachItem.card.info.description || ""}
                </p>
              </div>
              <div className="menu-item-image--wrapper">
                {eachItem.card.info.imageId && (
                  <img
                    className="menu-item-image"
                    src={MENU_ITEM_IMAGE_PREFIX + eachItem.card.info.imageId}
                  />
                )}
                <button
                  className="menu-item-add-btn"
                  onClick={() => {
                    handleRemove(eachItem);
                  }}
                >
                  REMOVE
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between my-4">
        <span className="font-extrabold uppercase text-lg">Total price</span>
        <span className="font-extrabold text-lg">₹{totalPrice} /-</span>
      </div>
    </div>
  );
};

export default CartItemList;
