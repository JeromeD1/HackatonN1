import { useState } from 'react'
import './CharacterCard.css'
import './CharacterCard.scss'
import logo1 from "../assets/images/oig.png"
import logo2 from "../assets/images/planets.png"
import logo3 from "../assets/images/specie.png"
import logo4 from "../assets/images/taille.png"
import logo5 from "../assets/images/poid_2.png"
import logo6 from "../assets/images/cheve.png"
import logo7 from "../assets/images/eye.png"

const CharacterCard = ({people}) => {

    const [favorite, setFavorite] = useState('false')
    const handleClickFavorite= () => {
        setFavorite(!favorite);
    }

    const [classFlip,setClassFlip]=useState("cardContenair")

    const handlecreatflip =(e)=>{
        if(classFlip==='cardContenair'){
            setClassFlip("cardContenair flip")
        } else{
            setClassFlip('cardContenair')
        }
    }

    return (
        <>
        <div className={classFlip}>
            <div className="front boxCard">
                <div className="boxPhoto"> 
                    <img className='photo' src={people?.image} alt={people?.name} />
                </div>
                <figcaption>{people?.name}</figcaption>
                <div className='logosLayout'>
                    <div onClick={handleClickFavorite} className={ favorite === true ? 'isFavorite' : 'notFavorite'}></div>
                    <div onClick={handlecreatflip} class="container">
                        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                            <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
                            <circle cx="170" cy="170" r="135" stroke="#404041"/>
                            <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
                            <circle cx="170" cy="170" r="85" stroke="#404041"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div onClick={handlecreatflip} className="back boxCard">
                <section className='layout-row'>
                    <img className='logoz' src={logo1} alt="bla bla" />
                    <p>{people?.gender}</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo2} alt="bla bla" />
                    <p>{people?.homeworld}</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo3} alt="bla bla" />
                    <p>{people?.species}</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo4} alt="bla bla" />
                    <p>{people?.height} m</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo5} alt="bla bla" />
                    <p>{people?.mass} kg</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo6} alt="bla bla" />
                    <p>{people?.hairColor}</p>
                </section>
                <section className='layout-row'>
                    <img className='logoz' src={logo7} alt="bla bla" />
                    <p>{people?.eyeColor}</p>
                </section>
                
            </div>
        </div>
        </>
    )
}

export default CharacterCard;