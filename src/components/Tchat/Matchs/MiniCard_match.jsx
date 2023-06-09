import "./MiniCard_match.scss"


function MiniCard_match({person, setUser, index}) {


    const handleClick = (e) => {
        setUser(index);
        // alert(index);
    }


    return (

        <div className="wrap-MiniCard" onClick={handleClick}>

            <div className="profile-pic">
                <img src={person.image}
                     alt={person.name}/>
            </div>

            <div className="content-card">
                <span className="profile-name"> {person.name} </span>
                <span className="profile-text"> Hey there </span>
            </div>

        </div>


    )

}


export default MiniCard_match