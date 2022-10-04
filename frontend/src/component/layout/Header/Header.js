import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {FaUserAlt,FaSearch} from "react-icons/fa";


const Header = () => {
  return (<ReactNavbar
    searchIcon={true}
    SearchIconElement={FaSearch}
    // searchIconSize="2vmax"
    // searchIconMargin="0 0 0 0"
    profileIcon={true}
    ProfileIconElement={FaUserAlt}
  />
  );
};
export default Header;