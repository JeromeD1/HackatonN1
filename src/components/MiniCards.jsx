import "./MiniCards.css"

const MiniCards = ({image, nom, person, setCardNumber, filteredPeoples}) => {

    const handleClickFigure = () => {
        const indiceBonnePersonne = filteredPeoples.findIndex(people => people.name === person.name)
        setCardNumber(indiceBonnePersonne);
    }

    return (
        <figure className="figure-minicard" onClick={handleClickFigure} >
            <img  className="image-minicard" src={image} alt={nom} />
            <figcaption className="nom-minicard" >{nom}</figcaption>
        </figure>
    )
}

export default MiniCards;