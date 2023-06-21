import "../styles.css"
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import OrderingPokemons from "../Components/App5/OrderingPokemons";
import PokemonCard from "../Components/App5/PokemonCard";

export default function App5() {
  const [pokemons, setPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)


useEffect(() => {
    async function fetchAPI() {
      
      setIsFetching(true)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=100")
      const data = await res.json()
      const objects = await (data.results)
      const urls = await Promise.all(objects.map(url =>  
        fetch(url.url)
        .then(res => res.json())
        ))
      setPokemons(urls)
      setIsFetching(false)
          }
  fetchAPI()
}, [])

const OrderEnum = {
  id: 0,
  alphabetical: 1,
  r_alphabetical: -1,
  height: 2,
  r_height: -2,
  weight: 3,
  r_weight: -3,
}

  return (
    <div className="form-row mw-auto">
      <h1 className="font-bold">Pokemons:</h1>
      <div className="flex flex-row justify-center flex-wrap gap-2">
        <OrderingPokemons name = "Pokedex" order={OrderEnum.id} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "A-Z" order={OrderEnum.alphabetical} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "Z-A" order={OrderEnum.r_alphabetical} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "Height -" order={OrderEnum.height} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "Height +" order={OrderEnum.r_height} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "Weight -" order={OrderEnum.weight} pokemons={pokemons} setPokemons={setPokemons}/>
        <OrderingPokemons name = "Weight +" order={OrderEnum.r_weight} pokemons={pokemons} setPokemons={setPokemons}/>
      </div>
      <div className="cards-pokemon-container gap-4 ">
        {(isFetching)?(<div>Fetching Data...</div>):(
          pokemons.map(pokemon => <PokemonCard prop={pokemon}></PokemonCard>
          ))}
      </div>
      <NavBar/>
    </div>
  )
}