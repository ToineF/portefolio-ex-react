import "../styles.css"
import { useEffect, useState } from "react";
import BookCard from "../Components/App4/BookCard";
import NavBar from "../Components/NavBar";

export default function App4() {
  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)


useEffect(() => {
    async function fetchAPI() {
      setIsFetching(true)
      const res = await fetch("https://fakerapi.it/api/v1/books?_quantity=9")
      const data = await res.json()
      setBooks(data.data)
      setIsFetching(false)
    }
  fetchAPI()
}, [])

const changeOrder = (condition) => {
  let newbooks = [...books]
  newbooks.sort((a,b) => {
    if(a.title < b.title) { return -1 * condition; }
    if(a.title > b.title) { return 1 * condition; }
    return 0;
  })
  setBooks(newbooks)
  console.log(books)
}

  return (
    <div className="form-row mw-auto">
      <h1 className="font-bold">Book List:</h1>
      <div className="flex wrapper flex-row gap-2">
        <button className="btn" onClick={() => changeOrder(1)}>
          A-Z</button>
        <button className="btn" onClick={() => changeOrder(-1)}>
          Z-A</button>
      </div>
      <div className="grid cards-container gap-4">
        {(isFetching)?(<div>Fetching Data...</div>):(
          books.map(book => <BookCard book={book}></BookCard>
          ))}
      </div>
      <NavBar/>
    </div>
  )
}