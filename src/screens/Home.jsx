import {useState, useEffect} from 'react'
import "./Home.css"
import LoginForm from '../components/Loginform';

const Home = () => {

    const [peoples, setPeoples] = useState([]);
  
    useEffect(() => {
      fetch("https://miadil.github.io/starwars-api/api/all.json")
        .then((res) => res.json())
        .then((res) => console.log(res) || setPeoples(res));
    }, []);


  return <>
  {/* {peoples.map(people =>(
    <img className='imagePeople' src={people.image} key={people.id} />
  ))} */}
  <LoginForm/>
  </>;
};

export default Home;
