import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';


const CharacterCardsList = () => {

    const [peoples, setPeoples] = useState([]);
  
    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);

    const [cardNumber,setcardNumber]=useState(0)

  return <>
    <CharacterCard people={peoples[cardNumber]}/>
    <section>
            <button>Précedent</button>
            <button>Suivant</button>
    </section>
  </>;
};

export default CharacterCardsList;