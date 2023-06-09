import { useState  } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    
  };
  
  return (
    <>
    <header className="globalHeader">

      <img className="heartLogo" src="src/assets/images/heartLogo.png" alt="logo" />
      {isMenuOpen ? (
        <ul className="ulHeader mobileMenu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/tchat">Mes Plans &#127825;</Link>
          </li>
          <li>
            <Link to="Profil">Mon Profil</Link>
          </li>
          <button onClick={toggleMenu} > &#9776;</button>
        </ul>
      ) : (
        <ul className="ulHeader">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/tchat">Mes Plans &#127825;</Link>
          </li>
          <li>
            <Link to="Profil">Mon Profil</Link>
          </li>
        </ul>
      )}
       
      <button className="menuToggle" onClick={toggleMenu}>
        &#9776;
      </button>
       

    </header>
    </>
  );
}

export default Header;
