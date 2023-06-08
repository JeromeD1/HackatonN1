const CharacterCard=({people})=>{

    return (
        <>
<div>
<img src={people.image} alt={people.name} />
<figcaption>{people.name}</figcaption>
</div>
        </>
    )

}

export default CharacterCard