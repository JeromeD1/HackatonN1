import { useState } from "react";


const LoginForm = () => {

const [isRegistering, setIsRegistering] = useState(false); // État initial : connexion
const [userName, setUserName] = useState("");

const onChangeName = (event) =>{
    setUserName(event.target.value);
};

const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
};

const handleSubmit = (event) => {
    event.preventDefault();
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
                <input type="text" placeholder='Nom' required/>
            )} 

            {isRegistering && (
                <input type="text" placeholder='Prénom'required/>
            )}    

            {isRegistering && (
                <input type="email" placeholder='Email'required/>
            )}

               
                <input type="text" placeholder='Pseudo' onChange={onChangeName} required/>
            
                <input type="password" placeholder='Password'required/>

                <button type='submit'> {isRegistering ? 'Inscription' : 'Connexion'} </button>

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