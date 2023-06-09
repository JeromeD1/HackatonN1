import "./Tchat.scss"
import {useState} from "react"
import Matchs from "./Matchs/Matchs"
import MatchProfile from "./MatchProfile/MatchProfile";
import TchatArea from "./TchatArea/TchatArea";
import Header from "../Header"

function Tchat({ propsPeoples, propsIndexMatched }) {

  const [userState, setUserState] = useState(0);
 
  // const [peoples, setPeoples] = propsPeoples;
  // const [indexMatched, setIndexMatched] = propsIndexMatched;
  const peoples = propsPeoples;
  const indexMatched = propsIndexMatched;
 
  /* People matchés */
  // console.log("Page tchat, reçu tableau fetch : "+ peoples);
  // console.log("test peoples 1 : " + peoples[0].name);
  // console.log("tableau de filtre : " + indexMatched);
  // console.log(indexMatched[2]);
   const peopleMatched = indexMatched.map((index) => {
    console.log("index : " + index);
    console.log(peoples[index]);
    
    return peoples[index] ;
  });

  let miseEnTab_people = [];
  miseEnTab_people = peopleMatched;
      
      
      
  // console.log("People matchés : " +JSON.stringify(peopleMatched));
  // console.log(typeof(test));
  // console.log(test);



    return (

      <>
      {/* <div className="NavBar">
        <Header className="black" />
      </div> */}
      <section className="main-tchat">
        <div className="matchs">
          <Matchs propsMatched={miseEnTab_people} userState={userState} setUserState={setUserState} />
        </div>
        <div className="tchat-area">
          <TchatArea />
        </div>
        <div className="match-profile">
          <MatchProfile propsMatched={miseEnTab_people} userState={userState}/>
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