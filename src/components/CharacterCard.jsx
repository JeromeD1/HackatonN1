import { useState } from 'react'
import './CharacterCard.css'

const CharacterCard = ({people}) => {

    const [favorite, setFavorite] = useState('false')
    const handleClickFavorite= () => {
        setFavorite(!favorite);
    }

    return (
        <>
        <div className="boxCard">
            <div className="boxPhoto"> 
                <img className='photo' src={people.image} alt={people.name} />
            </div>
            <figcaption>{people.name}</figcaption>
            <div onClick={handleClickFavorite} className={ favorite === true ? 'isFavorite' : 'notFavorite'}/>
        </div>
        <section>
            <button>Précedent</button>
            <button>Suivant</button>
        </section>
        </>
    )
}

export default CharacterCard;