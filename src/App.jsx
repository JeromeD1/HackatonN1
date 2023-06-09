import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import "./App.scss";

import Home from "./screens/Home";

import CharacterCardsList from "./screens/CharacterCardsList";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Swipe from "./components/Swipe/PageSwipe";
import Tchat from "./components/Tchat/Tchat";
// import CardsList from "./screens/CharacterCardsList"
import Etoiles from "./components/Etoiles";
import "./components/Etoiles.scss";


//TEST LOGINFORM
import LoginForm from "./components/Loginform";
import './components/Loginform.css';
import Profil from "./components/Profile/Profil"



function App() {

  const tabMatch = [0,1,2,3,4];


  const [peoples, setPeoples] = useState([]);
  const [indexMatched, setIndexMatched] = useState(tabMatch);
  
  return (
    <>
    <div className="app">

    
   
      <Routes>
        <Route path="/" element={<Home props={[peoples, setPeoples]} />} />
        <Route path="/swipe" element={<Swipe />} />
        {/* <Route path="/tchat" element={<Tchat propsPeoples={peoples} propsIndexMatched={indexMatched} />}/> */}
        <Route path="/tchat" element={<Tchat propsPeoples={peoples} propsIndexMatched={indexMatched} />}/>
        <Route path="/cardsList" element={<CharacterCardsList />} />
        <Route path="/profil" element={<Profil />} />
      
      </Routes>

      </div>


        {/* <Route path="/characters" element={<CharacterCardsList />} />   */}
      
      {/* <CharacterCardsList/> */}
    

      
      {/* <Footer /> */}

   


    </>
  );
}

export default App;