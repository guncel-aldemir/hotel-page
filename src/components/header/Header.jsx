import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Header.scss";
const Header = () => {
    const bgHeaderStyle={
        background:"linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0)),url(https://shtheme.com/demosd/charlostin1/wp-content/uploads/2018/09/slider-1.jpg)",
        backgroundPosition: "center",

    backgroundSize: "cover",
    height: "500px",
    width: "100%",
    
    }
  return <header >
    <div className="backgroundSide" style={bgHeaderStyle}>
       <div className="main-text">
        <h3>Spend Your Dream Holiday</h3>
        <div className="movement">
            <span>E</span>
            <span>n</span>
            <span>j</span>
            <span>o</span>
            <span>y</span>
           
            <span>y</span>
            <span>o</span>
            <span>u</span>
            <span>r</span>
            
            <span>t</span>
            <span>i</span>
            <span>m</span>
            <span>e</span>
        </div>
        <NavLink to="/">More Details</NavLink>
       </div>
    </div>
  </header>;
};

export default Header;
