import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./screens/Home";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tchat" element= {<Tchat />} />
        {/* <Route path="/characters" element={<Characters />} /> */}
      </Routes>


    

    </>
  );
}

export default App;
