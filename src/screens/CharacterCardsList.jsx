import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';
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
   
  <CharacterCard people={peoples[cardNumber]}/>
  <div>
    <button onClick={handleClickPrecedent}>Précédent</button>
    <button onClick={handleClickSuivant}>Suivant</button>
  </div>
  </>;
};

export default CharacterCardsList;