
import "./Matchs.scss"

import MiniCard_match from "./MiniCard_match"

function Match() {

    return (

        <section className="Container-matchs">
           
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