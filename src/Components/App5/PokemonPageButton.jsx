export default function PokemonPageButton({page, UpdateCurrentPokemon}) {
    
  

    return(<button className="pkmn-btn"
        onClick={() => {UpdateCurrentPokemon(page)}}>{page+1}</button>)
}