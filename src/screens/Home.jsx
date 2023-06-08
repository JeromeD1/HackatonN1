import {useState, useEffect} from 'react'
import "./Home.scss"



import FilterFormulaire from '../components/FilterFormulaire';

import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from '../components/Loginform';


const Home = () => {

    const [peoples, setPeoples] = useState([]);

    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return (
  <>
    {/* <div className='etoilesBackground'> */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      
       <Header/>
       <Footer/>
       <LoginForm/>
       </>
       )


{/* Jerome */}
    {/* <FilterFormulaire  peoples={peoples} setPeoples={setPeoples}  /> */}
    
    
 
  
};

export default Home;