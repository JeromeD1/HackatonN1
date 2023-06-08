import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'

import Home from "./screens/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
//TEST LOGINFORM
// import LoginForm from "./components/Loginform";
import './components/Loginform.css';

function App() {



  return (
    <>


    {/* <Home /> */}
      

      {/* <LoginForm/> */}

    <div className="app" > 
      
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>
      <Footer />

      </div>

    </>
  );
}

export default App;
