import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "../assets/burgerlogo.png";
import '../styles/Navbar.css' ;
function Navbar() {
    return (
        <>
         <nav>
        <NavLink to='/'>  
         <img src={Burger} alt="Logo" width="150" />
        </NavLink>
       
          
  <div className="links">
      <NavLink to="/">AnaSayfa</NavLink>
      <NavLink to="/about">Hakkımızda</NavLink>
      <NavLink to="/menu">Menü</NavLink>
      <NavLink to="/contact">İletişim</NavLink>
      </div>
    </nav>
    
    </>
     );
}

export default Navbar;