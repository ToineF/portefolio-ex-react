export default function OrderingPokemons({name, order, pokemons, number, setPokemons, setCurrentPokemons, setPage}) {
    const changeOrder = (condition) => {
        let newPokemons = [...pokemons]
        newPokemons.sort((a,b) => {
            if (condition === 0) {
                if(a.id < b.id) { return -1; }
                if(a.id > b.id) { return 1; }
            } else if ( Math.abs(condition) === 2) {
                if(a.height < b.height) { return -1 * condition; }
                if(a.height > b.height) { return 1 * condition; }
            } else if (Math.abs(condition) === 3) {
                if(a.weight < b.weight) { return -1 * condition; }
                if(a.weight > b.weight) { return 1 * condition; }
            } else {
                if(a.name < b.name) { return -1 * condition; }
                if(a.name > b.name) { return 1 * condition; }
            }
            return 0;
          })
          setCurrentPokemons(newPokemons.slice(0,number))
          setPage(0)
      }

    return(<button className="pkmn-btn" onClick={() => changeOrder(order)}>
    {name}</button>)
}