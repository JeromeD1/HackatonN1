import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';


const CharacterCardsList = () => {

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
  {/* {peoples.map(people =>(
    <CharacterCard people={people} key={people.id}/>
  ))} */}
  
  <CharacterCard people={peoples[cardNumber]}/>
  <div>
    <button onClick={handleClickPrecedent}>Précédent</button>
    <button onClick={handleClickSuivant}>Suivant</button>
  </div>
  </>;
};

export default CharacterCardsList;