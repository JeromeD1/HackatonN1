import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'

import Home from "./screens/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {

  const [peoples, setPeoples] = useState([]);
  
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => console.log(res) || setPeoples(res));
  }, []);

  return (
    <>

    <div className="app" > 
      
      <Header />
      <Footer />

      </div>
    </>
  );
}

export default App;
