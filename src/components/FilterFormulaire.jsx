import './FilterFormulaire.css'
import { useState,useEffect } from 'react';
import { Link , useNavigate} from "react-router-dom";


const FilterFormulaire = ({peoples,setPeoples,userName}) => {

    const navigate = useNavigate()

    const species = peoples.map(x => x.species);
    const uniqueSpecies = Array.from(new Set(species));
    const hairColors = peoples.map(x => x.hairColor);
    const uniqueHairColors = Array.from(new Set(hairColors));
    const eyeColor = peoples.map(x => x.eyeColor);
    const uniqueEyeColor = Array.from(new Set(eyeColor));

    const [genre,setGenre] = useState('');
    const [espece,setEspece] =useState('');
    const [hair, setHair] = useState('');
    const [eye,setEye] = useState('');
    const [masse,setMasse] =useState('');
    const [taille,setTaille] = useState('');
    const [nbClick,setNbClick] =useState(0);



    const handleChangeGenre = (e) => setGenre(e.target.value);
    const handleChangeEspece = (e) => setEspece(e.target.value);
    const handleChangeHair = (e) => setHair(e.target.value);
    const handleChangeEye = (e) => setEye(e.target.value);
    const handleChangeMasse = (e) => setMasse(e.target.value);
    const handleChangeTaille = (e) => setTaille(e.target.value);


    // const handleClickButton = (e) => {
    //     e.preventDefault();

    //     setNbClick(nbClick + 1);
    //     console.log(genre,espece,hair,eye,masse,taille);
    //     if(genre != "tout" && genre != ""){
    //         setPeoples(peoples.filter(person => person.gender === genre));
    //     }
    //     if(espece != "tout" && espece != ""){
    //         setPeoples(peoples.filter(person => person.species === espece));
    //     }
    //     if(hair != "tout" && hair != ""){
    //         setPeoples(peoples.filter(person => person.hairColor === hair));
    //     }
    //     if(eye != "tout" && eye != ""){
    //         setPeoples(peoples.filter(person => person.eyeColor === eye));
    //     }
    //     if(masse === "moins60"){
    //         setPeoples(peoples.filter(person => person.mass <= 60));
    //     } else if(masse === "60a100"){
    //         setPeoples(peoples.filter(person => person.mass >= 60 && person.mass <= 100));
    //     } else if(masse === "plus100"){
    //         setPeoples(peoples.filter(person => person.mass >= 100));
    //     }
    //     if(taille === "moins160"){
    //         setPeoples(peoples.filter(person => person.height <= 1.6));
    //     } else if(taille === "160a180"){
    //         setPeoples(peoples.filter(person => person.height >= 1.6 && person.height <= 1.8));
    //     } else if(taille === "plus180"){
    //         setPeoples(peoples.filter(person => person.height >= 1.8));
    //     }
    //     // TODO localStorage
    //     // TODO useNavigate
    //     if(nbClick>0){
    //         navigate("/cardsList", {state: peoples})
    //     }
        
    //     console.log(peoples);
    // }

    const handleClickButton = (e) => {
        e.preventDefault();
      
        // Créer une copie des données initiales
        let filteredPeoples = [...peoples];
      
        // Appliquer les filtres successivement
        if (genre !== "tout" && genre !== "") {
          filteredPeoples = filteredPeoples.filter(person => person.gender === genre);
        }
        if (espece !== "tout" && espece !== "") {
          filteredPeoples = filteredPeoples.filter(person => person.species === espece);
        }
        if (hair !== "tout" && hair !== "") {
          filteredPeoples = filteredPeoples.filter(person => person.hairColor === hair);
        }
        if (eye !== "tout" && eye !== "") {
          filteredPeoples = filteredPeoples.filter(person => person.eyeColor === eye);
        }
        if (masse === "moins60") {
          filteredPeoples = filteredPeoples.filter(person => person.mass <= 60);
        } else if (masse === "60a100") {
          filteredPeoples = filteredPeoples.filter(person => person.mass >= 60 && person.mass <= 100);
        } else if (masse === "plus100") {
          filteredPeoples = filteredPeoples.filter(person => person.mass >= 100);
        }
        if (taille === "moins160") {
          filteredPeoples = filteredPeoples.filter(person => person.height <= 1.6);
        } else if (taille === "160a180") {
          filteredPeoples = filteredPeoples.filter(person => person.height >= 1.6 && person.height <= 1.8);
        } else if (taille === "plus180") {
          filteredPeoples = filteredPeoples.filter(person => person.height >= 1.8);
        }
      
        // Mettre à jour l'état peoples avec les données filtrées
        setPeoples(filteredPeoples);
      
        // Naviguer vers la page de destination avec les données filtrées
        navigate("/cardsList", { state: { filteredPeoples } });
      }

 

    return(
        <>
        <div className='filterForm'>
            <h2>Bienvenue {userName}, que recherchez vous :</h2>
            <select className='selectFilter' onChange={handleChangeGenre}>
                <option value="" disabled selected >Un / Une partenaire</option>
                <option value="tout">Je ne sais lequel choisir...</option>
                <option value="female">Une femelle</option>
                <option value="male">Un male</option>
            </select>
            <select className='selectFilter' onChange={handleChangeEspece}>
                <option value="" disabled selected>Une espèce de préférence ?</option>
                <option value="tout">Un trou est un trou...</option>
                {uniqueSpecies.map(race => (
                    <option value={race} key={race} >{race}</option>
                ))}
            </select>
            <select className='selectFilter' onChange={handleChangeHair}>
                <option value="" disabled selected>Couleur de cheveux</option>
                <option value="tout">Peu importe</option>
                {uniqueHairColors.map(color => (
                    <option value={color} key={color} >{color}</option>
                ))}
            </select>
            <select className='selectFilter' onChange={handleChangeEye}>
                <option value="" disabled selected >Couleur des yeux</option>
                <option value="tout">Whatever</option>
                {uniqueEyeColor.map(color => (
                    <option value={color} key={color} >{color}</option>
                ))}
            </select>
            <select className='selectFilter' onChange={handleChangeMasse}>
                <option value="" disabled selected>Corpulance</option>
                <option value="tout">Des microbes aux gros lardons...</option>
                <option value="moins60">&#60; 60 kg</option>
                <option value="60a100">de 60 à 100 kg </option>
                <option value="plus100">&#62; 100 kg</option>
            </select>
            <select className='selectFilter' onChange={handleChangeTaille}>
                <option value="" disabled selected>Taille</option>
                <option value="tout">Ca dépend de quoi on parle... tout !</option>
                <option value="moins160">&#60; 1m60</option>
                <option value="160a180">de 1m60 à 1m80 </option>
                <option value="plus180">&#62; 1m80</option>
            </select>
            

            <button onClick={handleClickButton}>Trouver un partenaire</button>
            {/* <Link to={{
                pathname: '/cardsList',
                state: { peoples }
                }}> */}
            {/* </Link> */}
            
        </div>
                
        </>

    )
}

export default FilterFormulaire;