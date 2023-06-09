import { Link } from 'react-router-dom';
import React from 'react';
import "./Profil.scss";
import imgUser from '../../assets/img/EFVLKVFDAJBBNEA3DO2YZUITZI.avif';
import imgHome from '../../assets/img/icons8-accueil-50.png';
import imgRetourSwipe from '../../assets/img/icons8-moins-que-50.png';

function Profil() {
    return (
        <>
            <div className="navProfil">
                {/* <Link to="/swipe">
                    <img src={imgRetourSwipe} alt="Swipe" />
                </Link> */}
                <Link to="/">
                    <img src={imgHome} alt="Home" />
                </Link>
            </div>

            <section className="user-profile">
                <div className="pic-user">
                    <img src={imgUser} alt="imgUser" />
                </div>

                <div className="Description">
                    <input type="text" className="userName" placeholder="Dark Vador" />
                    <input type="text" className="age" placeholder="38 ans"/>
                    <input type="text" className="location" placeholder="Etoile noire"/>
                    <div className="description">
                        <textarea className="textArea">
                            "Salutations. Je suis Dark Vador, seigneur Sith et maître de la passion ardente. Je me suis aventuré dans les profondeurs de l'espace, mais il y a une force puissante qui me manque dans ma vie... une connexion charnelle.

                            Je recherche une partenaire qui pourrait satisfaire mes désirs les plus sombres et embrasser le côté sensuel de la Force. Une personne audacieuse qui serait prête à explorer des plaisirs interdits et à succomber à la tentation de l'obscurité.

                            En dehors de ma quête de domination galactique, j'apprécie les rencontres torrides à bord de mon vaisseau personnel et les jeux de rôle passionnants dans des costumes stimulants. Mes techniques de domination sont sans égales, et je saurai te transporter vers des sommets de plaisir inexplorés.

                            Si tu te sens prête à te lancer dans une aventure ardente avec moi, alors swipe vers la droite. Ensemble, nous pourrions atteindre des sommets orgasmiques que la galaxie n'a jamais connus. Que la passion soit avec toi, et avec nous."
                        </textarea>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profil;
