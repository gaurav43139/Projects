import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MENU_ITEM_IMAGE_PREFIX } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";

const MuiAccordion = ({
  menuPanelDetails,
  panelId,
  handleChange,
  expandedValue,
}) => {

  const dispatch = useDispatch();

  const handleClick = (eachItem) => {
    dispatch(addItem(eachItem))
  }

  return (
    <Accordion
      expanded={expandedValue === "panel" + panelId}
      onChange={handleChange("panel" + panelId)}
      slotProps={{ transition: { timeout: 150 } }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        className="font-bold"
        aria-controls={"panel-content-" + panelId}
        id={"panel-" + panelId}
      >
        {menuPanelDetails.card.card.title} (
        {menuPanelDetails.card.card.itemCards.length})
      </AccordionSummary>
      <AccordionDetails>
        {menuPanelDetails.card.card.itemCards.map((eachItem) => {
          return (
            <div key={eachItem.card.info.id} className="menu-item">
              <div className="menu-item-info">
                {eachItem.card.info.itemAttribute.vegClassifier === "NONVEG" ? (
                  <img src={""}/>
                ) : (
                  <img src={""}/>
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
                <button className="menu-item-add-btn" onClick={() => {handleClick(eachItem)}}>ADD</button>
              </div>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
};

export default MuiAccordion;
