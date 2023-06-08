import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'

import Home from "./screens/Home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {



  return (
    <>


    {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>

    <div className="app" > 
      
      <Header />
      <Footer />

      </div>

    </>
  );
}

export default App;
