import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import Home from "./Home";
import About from "./About";
import Contactame from "./Contactame";
import Portafolio from "./Portafolio";

function NavBar(props) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const about = useRef(null);
  const inicio = useRef(null);
  const portafolio = useRef(null);
  const contact = useRef(null);
 


  const gotoAbout = () =>
      window.scrollTo({
          top: about.current.offsetTop,
          behavior: "smooth"
      });

      const gotoInicio = () =>
      window.scrollTo({
          top: inicio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoPortafolio = () =>
      window.scrollTo({
          top: portafolio.current.offsetTop,
          behavior: "smooth"
      });

      const gotoContact = () =>
      window.scrollTo({
          top: contact.current.offsetTop,
          behavior: "smooth"
      });
 
  


  return (
     
    <>
      <nav className="navbar">
        <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
            Leobardo Antunez Cayetano
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={gotoInicio}
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sobremi"
                activeClassName="active"
                className="nav-links"
                onClick={gotoAbout}
              >
                Sobre mí
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portafolio"
                activeClassName="active"
                className="nav-links"
                onClick={gotoPortafolio}
              >
                Portafolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={gotoContact}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      
      <div ref={inicio}>
                        <Home />
                    </div>
       <div ref={about}>
           <About />
       </div>
                <div ref={portafolio}>
                    <Portafolio />
                </div>
                <div ref={contact}>
                    <Contactame />
                </div>
      
    </>
   
  
  
  );
}

export default NavBar;