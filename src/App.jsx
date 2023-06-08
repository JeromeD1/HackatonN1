import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";


// Essais
import Tchat from "./components/Tchat/Tchat"
import Matchs from "./components/Tchat/Matchs/Matchs"
import MatchProfile from "./components/Tchat/MatchProfile/MatchProfile"

import "./App.css";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Tchat />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/characters" element={<Characters />} /> */}
      {/* </Routes> */}

      {/* essais */}
      

    </>
  );
}

export default App;
