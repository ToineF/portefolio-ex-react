import "../styles.css"
import { useEffect, useState } from "react";
import BookCard from "../Components/App4/BookCard";
import NavBar from "../Components/NavBar";
import OrderingPeople from "../Components/App5/OrderingPeople";
import PeopleCard from "../Components/App5/PeopleCards";

export default function App5() {
  const [people, setPeople] = useState([])
  const [isFetching, setIsFetching] = useState(true)


useEffect(() => {
    async function fetchAPI() {
      setIsFetching(true)
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      const data = await res.json()
      setPeople(data.results)

      // THIS GETS THE ID OF THE 1ST POKEMON
      // const coords = data.results[0].url.split('/')
      // const id = coords[coords.length-2]

      console.log(coords, id)
      setIsFetching(false)
          }
  fetchAPI()
}, [])

const OrderEnum = {
  alphabetical: 1,
  r_alphabetical: -1,
  date: 2,
  r_date: -2,
  genre: 3,
  editor: 4,
}

  return (
    <div className="form-row mw-auto">
      <h1 className="font-bold">Star Wars Characters:</h1>
      <div className="flex wrapper flex-row gap-2">
        <OrderingPeople name = "A-Z" order={OrderEnum.alphabetical} people={people} setPeople={setPeople}/>
        <OrderingPeople name = "Z-A" order={OrderEnum.r_alphabetical} people={people} setPeople={setPeople}/>
        <OrderingPeople name = "Plus Ancien" order={OrderEnum.date} people={people} setPeople={setPeople}/>
        <OrderingPeople name = "Plus Recent" order={OrderEnum.r_date} people={people} setPeople={setPeople}/>
        <OrderingPeople name = "Genre" order={OrderEnum.genre} people={people} setPeople={setPeople}/>
        <OrderingPeople name = "Editeur" order={OrderEnum.editor} people={people} setPeople={setPeople}/>
      </div>
      <div className="grid cards-container gap-4">
        {(isFetching)?(<div>Fetching Data...</div>):(
          people.map(person => <PeopleCard people={person}></PeopleCard>
          ))}
      </div>
      <NavBar/>
    </div>
  )
}