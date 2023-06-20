import "../styles.css"
import { useEffect, useState } from "react";
import BookCard from "../Components/App4/BookCard";
import NavBar from "../Components/NavBar";
import OrderingButton from "../Components/App4/OrderingButton";

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

  return (
    <div className="form-row mw-auto">
      <h1 className="font-bold">Book List:</h1>
      <div className="flex wrapper flex-row gap-2">
        <OrderingButton name = "A-Z" order={1} books={books} setBooks={setBooks}/>
        <OrderingButton name = "Z-A" order={-1} books={books} setBooks={setBooks}/>
        <OrderingButton name = "Plus Ancien" order={2} books={books} setBooks={setBooks}/>
        <OrderingButton name = "Plus Recent" order={-2} books={books} setBooks={setBooks}/>
        <OrderingButton name = "Genre" order={3} books={books} setBooks={setBooks}/>
        <OrderingButton name = "Editeur" order={4} books={books} setBooks={setBooks}/>
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