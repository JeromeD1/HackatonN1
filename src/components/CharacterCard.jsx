import './CharacterCard.css'

const CharacterCard=({people})=>{

    return (
        <>
<div className="boxCard">
<img src={people.image} alt={people.name} />
<figcaption>{people.name}</figcaption>
<div className="isfavorite"></div>
</div>
        </>
    )

}

export default CharacterCard