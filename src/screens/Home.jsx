import {useState, useEffect} from 'react'
import "./Home.scss"

import { Link } from "react-router-dom";
import Etoiles from "../components/Etoiles"
import FilterFormulaire from '../components/FilterFormulaire';

import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginForm from '../components/Loginform';

const Home = ({props}) => {

  const [peoples, setPeoples] = props;

    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


    const [indexFormaAfficher, setIndexFormaAfficher] = useState(0);
    const [userName, setUserName] = useState("");
  
    
    const formaAfficher = [<LoginForm indexFormaAfficher={indexFormaAfficher} setIndexFormaAfficher={setIndexFormaAfficher} userName={userName} setUserName={setUserName} />,
    <FilterFormulaire  peoples={peoples} setPeoples={setPeoples} userName={userName}/>
  ]


  return (
    <>
    {/* <div className='etoilesBackground'> */}
      
    <Etoiles />
       <Header/>
       <Footer/>


 

       {formaAfficher[indexFormaAfficher]}

       {/* <LoginForm/> */}
    
       </>
       )

{/* Jerome */}
    {/* <FilterFormulaire  peoples={peoples} setPeoples={setPeoples}  /> */}
    
};

export default Home;