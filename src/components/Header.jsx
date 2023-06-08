import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
    <header className="globalHeader">
            <img className="heartLogo" src="src\assets\images\heartLogo.png" alt="logo" />
            <ul className="ulHeader">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ContactUs">Contact Us</Link>
              </li>
              <li>
                <Link to="Feedback">Feedback</Link>
              </li>
              <li>
                <p>"dark mode"</p>
              </li>
            </ul>
    </header>
    </>
  );
}

export default Header;
