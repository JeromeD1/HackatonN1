import {useState, useEffect} from 'react'
import "./Home.css"
import LoginForm from '../components/Loginform';
import FilterFormulaire from '../components/FilterFormulaire';
import Header from "../components/Header"

import "../components/Loginform.css"

const Home = () => {

    const [peoples, setPeoples] = useState([]);
  
    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return <>
    
    <Header/>
    <LoginForm/>


    <FilterFormulaire  peoples={peoples} setPeoples={setPeoples}  />


  </>;
};

export default Home;




{  /* {peoples.map(people =>(
  <img className='imagePeople' src={people.image} key={people.id} />
))} */}

    {/* <FilterFormulaire    /> */}
  {/* {peoples.map(people =>(
    <img className='imagePeople' src={people.image} key={people.id} />
  ))} */}