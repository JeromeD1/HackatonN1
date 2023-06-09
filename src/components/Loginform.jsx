import { useState } from "react";


const LoginForm = ({indexFormaAfficher, setIndexFormaAfficher,userName,setUserName}) => {

const [isRegistering, setIsRegistering] = useState(false); // État initial : connexion

const [nom, setNom] = useState("");
const [prenom, setPrenom] = useState("");
const [email, setEmail] = useState("");
const [mdp, setMdp] = useState("");

const handleChangeNom = (event) =>{
    setNom(event.target.value);
};
const handleChangePrenom = (event) =>{
    setPrenom(event.target.value);
};
const handleChangeEmail = (event) =>{
    setEmail(event.target.value);
};
const handleChangeMdp = (event) =>{
    setMdp(event.target.value);
};


const onChangeName = (event) =>{
    setUserName(event.target.value);
};

const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
};

const handleSubmit = (event) => {
    event.preventDefault();
}

const handleClickConnexion = () => {
    if(isRegistering === false){
        if(userName !="" && mdp != ""){
            setIndexFormaAfficher(indexFormaAfficher + 1);
        }
    } else if(userName !="" && mdp != "" && nom != "" && prenom != "" && email != "") {
        setIndexFormaAfficher(indexFormaAfficher + 1);
    }
    
}

    return(
    <div className="form-global">   
        <div className='form-style'> 
            
            
            <form onSubmit={handleSubmit}>

            {!isRegistering && (
            <div className="div-line"> </div>
            )}   

            <h2>Bienvenue sur STARMATCH!</h2>

            {isRegistering && (
                <input type="text" placeholder='Nom' onChange={handleChangeNom} required/>
            )} 

            {isRegistering && (
                <input type="text" placeholder='Prénom' onChange={handleChangePrenom}required/>
            )}    

            {isRegistering && (
                <input type="email" placeholder='Email' onChange={handleChangeEmail} required/>
            )}

               
                <input type="text" placeholder='Pseudo' onChange={onChangeName} required/>
            
                <input type="password" placeholder='Password' onChange={handleChangeMdp} required/>

                <button type='submit' onClick={handleClickConnexion} > {isRegistering ? 'Inscription' : 'Connexion'} </button>

                {!isRegistering && (

                <input type="button" onClick={handleSwitchForm} value="Pas encore membre, inscrivez-vous" className="inscription-button"/>
                
                )}

            {!isRegistering && (        
            <div className="div-line"> </div>
            )}
            </form>
            
        </div>
        </div>
    )
}


export default LoginForm;