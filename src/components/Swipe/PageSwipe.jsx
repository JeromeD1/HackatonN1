import { Link } from 'react-router-dom';

import "./pageSwipe.scss"

 import Header from "../Header";
 import imgHome from '../../assets/img/icons8-accueil-50.png';
// import imgHome from '../../assets/images/heartSolo.png';
import imgRetourSwipe from '../../assets/img/icons8-forward-50.png';
import imgSabre from '../../assets/img/icons8-sabre-laser-48.png';
import imgLike from '../../assets/img/icons8-aimer-50.png';

function PageSwipe() {


    return (

        <section class="PageSwipe">
            
            <div className="nav">
                <Link to="/">
                <img src= {imgHome} alt="Swipe" /></Link>
                <Link to="/tchat">
                <img src={imgRetourSwipe} alt="Home" /></Link>
            </div>

        
            <div className="wrap-content">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>    
            

        <div className="parent-card">

            <div className="ExempleCard">
                <div className="pic-swipe">
                    <img src="https://radiodisneyclub.fr/wp-content/uploads/2019/06/Jar-Jar-Binks-in-Star-Wars-700x368.jpg" alt="caption"></img>
                </div>

                <div className="selec-swipe">

                    <div className="valid">
                    <img src= {imgLike} alt="Swipe" />
                    </div>
                    <div className="abort">
                    <img src= {imgSabre} alt="Swipe" />
                    </div>
                
                </div>

            </div>

        </div>

            </div>
        

        </section>
    )


}


export default PageSwipe;

