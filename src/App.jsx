import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./App.scss";

import Home from "./screens/Home";
import CharacterCardsList from "./screens/CharacterCardsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginForm from "./components/Loginform";
import Tchat from "./components/Tchat/Tchat";
import PageSwipe from "./components/Swipe/PageSwipe"

function App() {
  return (

    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/Tchat" element={<Tchat />} />
      <Route path="/Swipe" element={<PageSwipe />} />
      {/* <Route path="/Character" element={<CharacterCardsList />} /> */}
      

    </Routes>
 )  
}

export default App;

 
  
  
  
  // <Tchat/>
    // 
      
      {/*  */}

        {/* */}

        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/characters" element={<CharacterCardsList />} /> */}
          {/* <Route path="/Tchat" element={<Tchat />} /> */}
        {/* </Routes> */}

        {/* <LoginForm /> */}

        {/* <Footer /> */}
      
    {/* </Router> */}

     

  
