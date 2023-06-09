import {useState, useEffect} from 'react'
import "./CharacterCardsList.css"
import CharacterCard from '../components/CharacterCard';
import { useLocation } from 'react-router-dom';


const CharacterCardsList = () => {
  const location = useLocation();
  const peoples = location.state;
    



  return <>
  {console.log(peoples)}
  {peoples.map(people =>(
    <CharacterCard people={people} key={people.id}/>
  ))}
  
  </>;
};

export default CharacterCardsList;