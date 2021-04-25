import React from "react";
import "../footer/Footer.css";
import { FaTag, FaTabletAlt, FaRupeeSign } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="f-grofer">
        <h2> Online Grocery Shopping</h2>
        <h4 className="f-heading">Online grocery store in India</h4>
        <p>
          Order online. All your favourite products from the low price online
          supermarket for grocery home delivery in Delhi, Gurugram, Bengaluru,
          Mumbai and other cities in India. Lowest prices guaranteed on
          Patanjali, Aashirvaad, Pampers, Maggi, Saffola, and others.
        </p>
      </div>
      <div className="footer-flex">
        <div className="footer-fatag">
          <FaTag className="footer-fatag1" />
          <div className="footer-fatag2">
            <p className="footer-fatag-p">Best Prices & Offers</p>
            <p className="footer-fatag-p1">
              Cheaper prices than your local supermarket.
            </p>
          </div>
        </div>
        <div className="footer-fatag">
          <FaTabletAlt className="footer-fatag1" />
          <div className="footer-fatag2">
            <p className="footer-fatag-p">Wide Assortment</p>
            <p className="footer-fatag-p1">
              Choose from 5000+ products across food,& other categories.
            </p>
          </div>
        </div>
        <div className="footer-fatag">
          <FaRupeeSign className="footer-fatag1" />
          <div className="footer-fatag2">
            <p className="footer-fatag-p">Easy Returns</p>
            <p className="footer-fatag-p1">
              Not satisfied with a product? Return it at the doorstep.
            </p>
          </div>
        </div>
      </div>
      <div className="footer-follow">
        <h3>Follow Us</h3>
        <img
          className="footer-img1"
          src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png"
        />
        <img
          className="footer-img1"
          src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png"
        />
        <img
          className="footer-img1"
          src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png"
        />
        <img
          className="footer-img1"
          src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png"
        />
      </div>
    </div>
  );
}
