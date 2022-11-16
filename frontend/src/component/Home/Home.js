 import React, {Fragment} from "react";
 import {CgMouse} from "react-icons/cg";
 import "./Home.css";
 import Product from "./product.js";
 import MetaData from "../layout/MetaData.js";
 const product={
    name: " Arduino",
    images:[{url:'https://cdn.sparkfun.com/assets/9/1/e/4/8/515b4656ce395f8a38000000.png'}],
    price:"₹400rs",
    _id:"a1",
     
 };

 const Home = ()=>{
    return <Fragment>
        <MetaData title="Home Page is working"/>
        <div className="banner">
            <p>Welcome to Gadget Store </p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
             <a href="#container">
                <button>
                    Scroll <CgMouse />
                </button>
                </a>
        </div>

        <h2 className="homeHeading">Featured products</h2>
        <div className="container" id="container">
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            <Product product = { product}/>
            </div>
    </Fragment>
 }
 export default Home;