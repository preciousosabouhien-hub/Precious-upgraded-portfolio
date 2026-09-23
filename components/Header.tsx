"use client";

import { useState } from "react" ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars, faXmark,
} from "@fortawesome/free-solid-svg-icons" ;


export default function Header() {
   const [isMenuOpen, setIsMenuOpen ] = useState(false);
  return (
    <header className="navbar">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <a href="#top" className="nav-icon"><b>
          Precious Omosefe</b>
    </a>
              <div className={`navi-list ${isMenuOpen ? "active" : "" } `}>
          <a href="#about" className="nav-links">About</a>
          <a href="#work" className="nav-links">Services</a>
          <a href="#projects" className="nav-links">Projects</a>
          <a href="#contact" className="nav-links">Contact</a>
          
                </div>
                    <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ><FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars } /></button> 

      </div>
    </header>
  );
}
