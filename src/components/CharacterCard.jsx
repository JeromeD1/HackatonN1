import { useState } from 'react'
import './CharacterCard.css'

const CharacterCard = ({people}) => {

    const [favorite, setFavorite] = useState('false')
    const handleClickFavorite= () => {
        setFavorite(!favorite);
    }

const [classFlip,setClassFlip]=useState("cardContenair")

    const handlecreatflip =(e)=>{
if(classFlip==='cardContenair'){
    setClassFlip("cardContenair flip")
}

else{setClassFlip('cardContenair')}
    }

    return (
        <>
        <div className="boxCard">
            <div className="boxPhoto"> 
                <img className='photo' src={people.image} alt={people.name} />
            </div>
            <figcaption>{people.name}</figcaption>
            <div className="notFavorite"></div>
        </div>
        <section>
            <button>Précedent</button>
            <button>Suivant</button>
        </section>
        </>
    )
}

export default CharacterCard;