import "./App.css";
// import { useEffect } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter,  Routes, Route  } from "react-router-dom";
// import WebFont from "webfontloader";
import React from "react";
import Footer  from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";




function App() {
  
// useEffect(() => {

//   WebFont.load({
//     google: {
//       families: ["Roboto:300,400,500,700", "sans-serif"],
//     },
//   });
// }, []);
  return (
      
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>

);
}
export default App;
