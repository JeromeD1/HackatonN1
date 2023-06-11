import { useState  } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen); 
  };

  const toggleMenuLink = () => {
    if(isMenuOpen){
      setMenuOpen(!isMenuOpen); 
    }
  };
  
  return (
    <>
    <header className="globalHeader">
    <img className="heartLogo" src="src/assets/images/heartLogo.png" alt="logo" />
      <div className={isMenuOpen ? "mobile-menu-container" : "menu-container"} >
        
          <ul className={isMenuOpen ? "mobileMenu" : "ulHeader"}>
            <li>
              <Link to="/" onClick={toggleMenuLink}>Accueil</Link>
            </li>
            <li>
              <Link to="/tchat" onClick={toggleMenuLink}>Mes Plans &#127825;</Link>
            </li>
            <li>
              <Link to="Profil" onClick={toggleMenuLink}>Mon Profil</Link>
            </li>
          </ul>
        
       </div>
      <button className="menuToggle" onClick={toggleMenu}>
        &#9776;
      </button>
       

    </header>
    </>
  );
}

export default Header;
