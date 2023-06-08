import './CharacterCard.css'

const CharacterCard=({people})=>{

    return (
        <>
        <div className="boxCard">
            <div className="boxPhoto"> 
                <img className='photo' src={people.image} alt={people.name} />
            </div>
            <figcaption>{people.name}</figcaption>
            <div className="notFavorite">
                test
            </div>
        </div>
        <section>
            <button>Précedent</button>
            <button>Suivant</button>
        </section>
        </>
    )

}

export default CharacterCard