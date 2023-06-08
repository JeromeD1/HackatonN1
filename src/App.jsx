import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Home from "./screens/Home";

import "./App.css";

function App() {




  return (
    <>

    {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>
    </>
  );
}

export default App;
