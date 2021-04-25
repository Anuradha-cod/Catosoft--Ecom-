import React from "react";
import { FaChevronDown } from "react-icons/fa";

function OfferDetail({ setIsVisible }) {
  return (
    <div className="offer-detail">
      <img
        className="offerDetail-img"
        src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,w=290,h=280/app/images/category/cms_images/icon/icon_cat_16_v_3_500_1605795544.jpg"
        alt="img"
      />

      <div
        onClick={() => {
          setIsVisible(false);
        }}
      >
        <p className="offer-detail-heading">Up to 72% OFF</p>
        <h3 className="offer-detail-heading1">Grocery & Staples</h3>
        <p className="offer-detail-para">
          Pulses, Atta & Other Flours, Rice & Other Grains, Dry Fruits & Nuts,
          Edible Oils, Ghee & Vanaspati, Spices, Salt & Sugar, Organic Staples,
          Grocery Best Offers
        </p>
      </div>
      <FaChevronDown
        onClick={() => {
          setIsVisible(true);
        }}
      />
    </div>
  );
}

export default OfferDetail;
