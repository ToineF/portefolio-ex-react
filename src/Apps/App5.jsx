import "../styles.css"
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import OrderingPokemons from "../Components/App5/OrderingPokemons";
import PokemonPageButton from "../Components/App5/PokemonPageButton";
import PokemonCard from "../Components/App5/PokemonCard";

export default function App5() {
  const [pokemons, setPokemons] = useState([])
  const [currentPokemons, setCurrentPokemons] = useState([])
  const [isFetching, setIsFetching] = useState(true)
  const number = 36
  const [page, setPage] = useState(0)

useEffect(() => {
    async function fetchAPI() {
      
      setIsFetching(true)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0`)
      const data = await res.json()
      const objects = await (data.results)
      const urls = await Promise.all(objects.map(url =>  
        fetch(url.url)
        .then(res => res.json())
        ))
        setPokemons(urls)
        setCurrentPokemons(urls.slice(0,number))
        console.log(pokemons.length)
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
      <p>{(isFetching)?(''):(currentPokemons.length + " Pokémons")}</p>
      <div className="flex flex-row justify-center flex-wrap gap-2">
        <OrderingPokemons name = "Pokedex" order={OrderEnum.id} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "A-Z" order={OrderEnum.alphabetical} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "Z-A" order={OrderEnum.r_alphabetical} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "Height -" order={OrderEnum.height} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "Height +" order={OrderEnum.r_height} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "Weight -" order={OrderEnum.weight} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
        <OrderingPokemons name = "Weight +" order={OrderEnum.r_weight} pokemons={pokemons} number={number} setPokemons={setPokemons} setCurrentPokemons={setCurrentPokemons} setPage={setPage}/>
      </div>
      <div className="cards-pokemon-container gap-4 ">
        {(isFetching)?(<div className="flex justify-center gap-2">
          <img src={"https://i.giphy.com/media/FgH5xSNjGHZsiYPWAX/giphy_s.gif"} className="w-6"></img>
          Fetching Data...</div>):(
          currentPokemons.map(pokemon => <PokemonCard prop={pokemon}></PokemonCard>
          ))}
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-2">
      {(isFetching)?(""):(<>
        {(page > 0)?(<PokemonPageButton page={0} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):(<div className="btn">{page+1}</div>)}
        {(page > 5)?("..."):("")}
        {(page > 3)?(<PokemonPageButton page={page-3} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page > 2)?(<PokemonPageButton page={page-2} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page > 1)?(<PokemonPageButton page={page-1} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page >0 && page < Math.floor(pokemons.length/number))?(<div className="btn">{page+1}</div>):("")}
        {(page < Math.floor(pokemons.length/number)-1)?(<PokemonPageButton page={page+1} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page < Math.floor(pokemons.length/number)-2)?(<PokemonPageButton page={page+2} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page < Math.floor(pokemons.length/number)-3)?(<PokemonPageButton page={page+3} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):("")}
        {(page < Math.floor(pokemons.length/number)-5)?("..."):("")}
        {(page < Math.floor(pokemons.length/number))?(<PokemonPageButton page={Math.floor(pokemons.length/number)} number={number} setCurrentPokemons={setCurrentPokemons} pokemons={pokemons} setPage={setPage}/>):(<div className="btn">{page+1}</div>)}
        </>)}
      </div>
      <NavBar/>
    </div>
  )
}