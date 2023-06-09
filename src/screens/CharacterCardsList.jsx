import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';
import { useLocation } from 'react-router-dom';


const CharacterCardsList = () => {
  const location = useLocation();
  const filteredPeoples = location.state;
    



  return <>
  {console.log(filteredPeoples.filteredPeoples)}
  {filteredPeoples.filteredPeoples.map(people =>(
    <CharacterCard people={people} key={people.id}/>
  ))}
  
  </>;
};

export default CharacterCardsList;