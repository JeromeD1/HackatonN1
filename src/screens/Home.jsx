import {useState, useEffect} from 'react'

const Home = () => {

    const [peoples, setPeoples] = useState([]);
  
    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return <>je suis dans la page home</>;
};

export default Home;
