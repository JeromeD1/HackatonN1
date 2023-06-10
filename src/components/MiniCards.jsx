import "./MiniCards.css"

const MiniCards = ({image, nom}) => {

    return (
        <figure className="figure-minicard" >
            <img  className="image-minicard" src={image} alt={nom} />
            <figcaption className="nom-minicard" >{nom}</figcaption>
        </figure>
    )
}

export default MiniCards;