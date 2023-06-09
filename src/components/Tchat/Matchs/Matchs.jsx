
import { Link } from 'react-router-dom';
import {useState} from 'react'

import "./Matchs.scss"

import MiniCard_match from "./MiniCard_match"
import imgHome from '../../../assets/img/icons8-accueil-50.png';
// import imgHome from '../../../assets/images/heartSolo.png';
import imgRetourSwipe from '../../../assets/img/icons8-swipe-64.png';

function Match({propsMatched, userState, setUserState}) {

    console.log("Matchs : " + propsMatched);

    



    return (

        <section className="Container-matchs">

           <div className="nav">
                <Link to="/">
                <img src= {imgHome} alt="Swipe" /></Link>
                <Link to="/swipe">
                <img src={imgRetourSwipe} alt="Home" /></Link>
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
                {propsMatched.map((elem, index) => {
                console.log("elem tchat card:");
                console.log(elem);
                return (
                <MiniCard_match
                    key={index}
                    person={elem}
                    setUser={setUserState}
                    index={index}
                />
            );
  })}
</div>

                

         
            

        </section>


    )
  
}

export default Match