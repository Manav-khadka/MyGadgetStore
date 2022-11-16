import React from "react";
import playstore from "../../../images/playstore.png";
import appstore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="Footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download app for Android and ios mobile phone.</p>
        <img src={playstore} alt="playstore" />
        <img src={appstore} alt="appStore" />
      </div>
      <div className="middleFooter">
        <h1>MY GADGET STORE</h1>
        <p>HIGH QUALITY GADGETS</p>
        <p>Copyrights 2022 &copy; mygadgetstore</p>

      </div>
      <div className="rightFooter">
        <h4>Follow us on </h4>
        <a href="https://www.facebook.com/manav.khadkaa"  >facebook </a>
        <a href="https://www.instagram.com/manavkhadkaa/" >instagram </a>
      </div>
    </footer>
  );
};

export default Footer;
