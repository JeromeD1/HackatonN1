import {useState, useEffect} from 'react'
import "./Home.css"
import FilterFormulaire from '../assets/FilterFormulaire';

const Home = () => {

    const [peoples, setPeoples] = useState([]);
  
    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return <>

    <FilterFormulaire  peoples={peoples} setPeoples={setPeoples}  />
    {/* <FilterFormulaire    /> */}
  {/* {peoples.map(people =>(
    <img className='imagePeople' src={people.image} key={people.id} />
  ))} */}
  </>;
};

export default Home;
