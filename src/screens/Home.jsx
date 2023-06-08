import {useState, useEffect} from 'react'
import "./Home.scss"

import LoginForm from '../components/Loginform';

import FilterFormulaire from '../components/FilterFormulaire';


const Home = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json%22")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return (
  <>
    <div className='etoilesBackground'>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

    {/* <LoginForm /> */}

{/* Jerome */}
    <FilterFormulaire  peoples={peoples} setPeoples={setPeoples}  />
    
    </div>
  </>
  )
};

export default Home;