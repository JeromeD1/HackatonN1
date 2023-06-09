import "./MatchProfile.scss"
import MiniCard_desc from "./MiniCard_desc"

function MatchProfile({propsMatched,userState}) {

    const userDesc = propsMatched[userState];

    return(
        <div className="Container-matchProfile">

                <MiniCard_desc userDesc={userDesc} />
        

        </div>
    )

}


export default MatchProfile