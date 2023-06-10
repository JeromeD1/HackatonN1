import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';
import Etoiles from '../components/Etoiles';
import { useLocation } from 'react-router-dom';


const CharacterCardsList = () => {
  const location = useLocation();
  const filteredPeoples = location.state;
    
  const [peoples, setPeoples] = useState([]);
  const [cardNumber, setCardNumber] = useState(0)

  const handleClickSuivant = () => {
      setCardNumber(cardNumber + 1)
  }
  const handleClickPrecedent = () => {
    setCardNumber(cardNumber - 1)
  }

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setPeoples(res));
  }, []);

  return <>
  <Etoiles />
  <section className='carte'>
    <CharacterCard people={filteredPeoples.filteredPeoples[cardNumber]}/>
    <div className='divbouton'>
      <button className='boutonswipe' onClick={handleClickPrecedent}>Précédent</button>
      <button className='boutonswipe' onClick={handleClickSuivant}>Suivant</button>
    </div>
  </section>
  </>;
};

export default CharacterCardsList;