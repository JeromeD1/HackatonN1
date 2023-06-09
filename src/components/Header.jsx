import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <>
    <header className="globalHeader">
            <img className="heartLogo" src="src\assets\images\heartLogo.png" alt="logo" />
            <ul className="ulHeader">
              <li>
                <Link to="/">Accueil</Link>
              </li>
              <li>
                <Link to="/tchat">Mes Plans &#127825;</Link>
              </li>
              <li>
                <Link to="/profil">Mon Profile</Link>
              </li>
            
            </ul>
    </header>
    </>
  );
}

export default Header;
