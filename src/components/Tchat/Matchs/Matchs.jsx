
import { Link } from 'react-router-dom';

import "./Matchs.scss"

import MiniCard_match from "./MiniCard_match"
import imgHome from '../../../assets/img/icons8-accueil-50.png';
import imgRetourSwipe from '../../../assets/img/icons8-moins-que-50.png';

function Match() {

    return (

        <section className="Container-matchs">

           <div className="nav">
                <Link to="/swipe">
                <img src= {imgRetourSwipe} alt="Swipe" /></Link>
                <Link to="/">
                <img src={imgHome} alt="Home" /></Link>
            </div>

            <div className="matchs-profile">
            
                <div className="wrap-img">
                    <img src="https://radiodisneyclub.fr/wp-content/uploads/2019/06/Jar-Jar-Binks-in-Star-Wars-700x368.jpg" 
                         alt="pic_profile"/>
                </div>
                <span> Mon profil </span>
            </div>

            <div className="matchs-title">
                <span> Messages </span>                      
            </div>
            <div className="matchs-miniCards">
              <MiniCard_match/>
            </div>

        </section>


    )
  
}

export default Match