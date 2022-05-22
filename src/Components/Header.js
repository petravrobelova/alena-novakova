import '../App.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import menuButton from "../images/menu-button.png";


function Header() {

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
        <div id="header">
          <div className='container heading-container'>
          <div className='header-heading'>
            <h1>MUDr. Alena Nováková</h1>
            <h2 id="heading-psychiatry">AMBULATNÍ PSYCHIATRICKÁ PÉČE V OLOMOUCI</h2>
          </div>
          <div>
            <button 
              id="menu-button"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                console.log(isNavExpanded);
              }} > 
              <img src={menuButton}/>
            </button>
          </div>
          </div>
        </div>
        <div className='container'>
        <nav className={ isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
          <ul id='nav-bar'>
            <li>
              <NavLink 
              to="/">Atuální informace</NavLink>
            </li>
            <li>
              <NavLink to="/o-lekarce">O Lékařce</NavLink>
            </li>
            <li>
              <NavLink to="/pro-pacienty">Pro pacienty</NavLink>
            </li>
            <li>
              <NavLink to="/zpusob-uhrady">Způsob úhrady</NavLink>
            </li>
            <li>
              <NavLink to="/ordinacni-hodiny">Ordinační hodiny</NavLink>
            </li>
            <li>
              <NavLink to="/kontakt">Kontakt</NavLink>
            </li>
          </ul>
        </nav> 
        </div> 
    </header>
  );
}

export default Header;