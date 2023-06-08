import { useState } from 'react'
import './CharacterCard.css'

const CharacterCard=({people})=>{

const [classFlip,setClassFlip]=useState("cardContenair")

    const handlecreatflip =(e)=>{
if(classFlip==='cardContenair'){
    setClassFlip("cardContenair flip")
}

else{setClassFlip('cardContenair')}
    }

    return (
        <>
        <div onClick={handlecreatflip} className={classFlip}>
            <div className="front boxCard">
                <div className="boxPhoto"> 
                    <img className='photo' src={people.image} alt={people.name} />
                </div>
                <figcaption>{people.name}</figcaption>
                <div className="notFavorite"></div>
            </div>
            <div className="back boxCard">
                <h1>YEAHHHH</h1>
            </div>
        </div>
        </>
    )

}

export default CharacterCard