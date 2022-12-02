import React from "react";
import {MdLocationOn} from "react-icons/md";
import {AiOutlineArrowRight,AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import "../../assets/styles/Navbar.scss";
const Navbar = () => {
  return <div className="navbarSide">
    <div className="headerUpper">
        <div className="headerAddress">
            <MdLocationOn color="#dba765" size={27}/>
            <p>4517 Washington Ave. Manchester, Kentucky 39495, USA</p>
        </div>
        <div className="logoSide">
            <img src="https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/logo.svg" alt="logo"/>
        </div>
        
        <div className="bookSide">
        <span>+(406) 555-0120</span>
            <NavLink to="" className="bookLinks">Book Your Stay
            <AiOutlineArrowRight color="#dba765"/>
            </NavLink>
        </div>
        <div className="navListToggle">
            <div>
                <AiOutlineClose size={24} color="#333" />
            </div>
            <ul className="navListToggleItems">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About Us</NavLink></li>
                <li><NavLink to="/">Rooms</NavLink></li>
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/">Gallery</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
            </ul>
        </div>
    </div>
    <nav className="navbarSide">
        
        
        <div className="logoNavside">
        <img src="https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/logo.svg" alt="logo"/>
        </div>
        <div className="navbarToggle">
            <AiOutlineMenu size={24} color="#333"/>
        </div>
        <div className="navListSide">
            <ul className="navListItems">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/">About Us</NavLink></li>
                <li><NavLink to="/">Rooms</NavLink></li>
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/">Gallery</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
            </ul>
        </div>
       
  
   
    </nav>
  </div>;
};

export default Navbar;
