import "./MiniCard_desc.scss"

function MiniCard_desc({userDesc}) {


    console.log("minicard desc : " +userDesc);
    return(

        <div className="MiniCard_desc">

            <div className="desc_img">
                <img src={userDesc.image}
                     alt={userDesc.name}/>
            </div>

            <div className="desc_text">
                {/* <span className="name">{propsMatched[userState]}</span> */}
        
                <span className="HomeWorld"> 
                {userDesc.homeworld} 
                </span>
                <span className="description">
                "Salut tout le monde! Moi, Jar Jar Binks, un Gungan très excentrique à la recherche d'un partenaire aventureux pour explorer la galaxie ensemble. Je suis un peu maladroit, mais j'ai un grand cœur et je promets de vous faire rire avec mes cascades comiques. Je suis toujours prêt à essayer de nouvelles choses, que ce soit des balades en speeder, de la plongée sous-marine dans les lacs de Naboo ou même une soirée dansante dans une cantina intergalactique. Si vous aimez les créatures exotiques, les oreilles pointues et les histoires passionnantes, swipez à droite et rejoignons la Force de l'amour et de l'aventure !"
                </span>
                
                
               
                
            </div>


        </div>


    )

}

export default MiniCard_desc
