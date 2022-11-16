import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUser, FaSearch, FaCartPlus } from "react-icons/fa";
import logo from "../../../images/logo.png";
const options={
  burgerColor:"red",
      burgerColorHover:"blue",
      link1ColorHover:"#601ce3",

      logo:logo,
      logoWidth:"10vmax",
      navColor1:"#fff",
      link1Margin:"1.5vmax",
      link1Text:"Home",
      link2Text:"Products",
      link3Text:"Contact",
      link4Text:"About",
      link1Url:"/",
      link2Url:"/products",
      link3Url:"/contact",
      link4Url:"/about",
      link1Size:"1.6vmax",
      link1Color:"rgba(35, 35, 35,0.8)",
      // nav1justifyContent: "flex-end"
      nav2justifyContent:"flex-end",
      nav3justifyContent:"flex-start",
      nav4justifyContent:"flex-start",
      profileIcon:true,
      ProfileIconElement:FaUser,
      profileIconSize:"2.0vmax",
      profileIconUrl:"/profile",
      searchIcon:true,
      SearchIconElement:FaSearch,
      cartIcon:true,
      CartIconElement:FaCartPlus,
      cartIconMargin:"1vmax",
      profileIconColor:"rgba(35, 35, 35,0.8)",
      searchIconColor:"rgba(35, 35, 35,0.8)",
      cartIconColor:"rgba(35, 35, 35,0.8)",
}

const Header = () => {
  return (
    <ReactNavbar {...options} />
    
 
  );
};
export default Header;
