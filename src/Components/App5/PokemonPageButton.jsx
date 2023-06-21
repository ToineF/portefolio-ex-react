export default function PokemonPageButton({number, page, pokemons, setCurrentPokemons, setPage}) {
    
  function UpdateCurrentPokemon(p) {
    const newPokemons = pokemons.slice(p*number,(p+1)*number)
    setCurrentPokemons(newPokemons)
    setPage(p)
  }

    return(<button className="pkmn-btn"
        onClick={() => {UpdateCurrentPokemon(page)}}>{page+1}</button>)
}