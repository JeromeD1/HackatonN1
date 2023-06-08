import "./Tchat.scss"

import Matchs from "./Matchs/Matchs"
import MatchProfile from "./MatchProfile/MatchProfile";
import TchatArea from "./TchatArea/TchatArea";

function Tchat() {


    return (

        <section className="main-tchat">

           <Matchs/>
           <TchatArea/>
           <MatchProfile/>


        </section>



    )



}

export default Tchat;



{/* <section className="container-matchs">
<div className="wrap-matchs"></div>
</section>

<section className="container-tchat">
<div className="tchat-history-match"></div>
<div className="tchat-messages"></div>
<div className="tchat-input"></div>
</section>

<section className="container-description">
<div className="description-match"></div>
</section> */}