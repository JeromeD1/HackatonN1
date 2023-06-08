import './CharacterCard.css'

const CharacterCard=({people})=>{

    return (
        <>
        <div className="boxCard">
            <div className="boxPhoto"> 
                <img className='photo' src={people.image} alt={people.name} />
            </div>
            <figcaption>{people.name}</figcaption>
            <div className="isfavorite"></div>
        </div>
        </>
    )

}

export default CharacterCard