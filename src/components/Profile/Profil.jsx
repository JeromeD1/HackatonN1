import { Link } from 'react-router-dom';
import React from 'react';
import "./Profil.scss";
import imgUser from '../../assets/img/EFVLKVFDAJBBNEA3DO2YZUITZI.avif';
import imgRetourSwipe from '../../assets/img/icons8-moins-que-50.png';
import Etoiles from '../Etoiles';
import Footer from '../Footer';

function Profil() {
    return (
        <>
            <Etoiles />
            <section className="user-profile">
                <div className="pic-user">
                    <img src="https://th.bing.com/th/id/R.f4caabe29bd73c450ace5ef5540ee7ce?rik=dc2JfkN98U1IFA&riu=http%3a%2f%2fwww.cineshow.fr%2fwp-content%2fuploads%2f2015%2f09%2fStar-Wars.jpg&ehk=momeKqgLWMkDLRkBXOdK9gtbbX%2fRBKjI2A9%2fiQPklBo%3d&risl=&pid=ImgRaw&r=0" alt="imgUser" />
                    <div className='infoProfile' >
                        <p className="user" >Dark Vador</p>
                        <p className="user" >38 ans</p>
                        <p className="user" >Lieu d'habitation : Etoile noire</p>
                    </div>
                </div>

                    
                    <div className="description">
                        <div className="textArea">
                            "Salutations. Je suis Dark Vador, seigneur Sith et maître de la passion ardente. Je me suis aventuré dans les profondeurs de l'espace, mais il y a une force puissante qui me manque dans ma vie... une connexion charnelle.

                            Je recherche une partenaire qui pourrait satisfaire mes désirs les plus sombres et embrasser le côté sensuel de la Force. Une personne audacieuse qui serait prête à explorer des plaisirs interdits et à succomber à la tentation de l'obscurité.

                            En dehors de ma quête de domination galactique, j'apprécie les rencontres torrides à bord de mon vaisseau personnel et les jeux de rôle passionnants dans des costumes stimulants. Mes techniques de domination sont sans égales, et je saurai te transporter vers des sommets de plaisir inexplorés.

                            Si tu te sens prête à te lancer dans une aventure ardente avec moi, alors swipe vers la droite. Ensemble, nous pourrions atteindre des sommets orgasmiques que la galaxie n'a jamais connus. Que la passion soit avec toi, et avec nous."
                        </div>
                    </div>
            </section>
            {/* <Footer /> */}
            </>
    );
}

export default Profil;
