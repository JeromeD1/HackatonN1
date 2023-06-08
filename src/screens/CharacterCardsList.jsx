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


  return <>
  {peoples.map(people =>(
    <CharacterCard people={people} key={people.id}/>
  ))}
  
  </>;
};

export default CharacterCardsList;