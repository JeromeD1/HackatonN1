import "./Tchat.scss"

import Matchs from "./Matchs/Matchs"
import MatchProfile from "./MatchProfile/MatchProfile";
import TchatArea from "./TchatArea/TchatArea";
import Header from "../Header"

function Tchat() {


    return (

        <>
        {/* <div className="NavBar">
          <Header className="black"/>
        </div> */}
        <section className="main-tchat">
          
        <div className="matchs">
          <Matchs />
        </div>
        <div className="tchat-area">
          <TchatArea />
        </div>
        <div className="match-profile">
          <MatchProfile />
        </div>
      </section>
      </>


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