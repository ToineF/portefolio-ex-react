import "../styles.css"
import { useEffect, useState } from "react";

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
    <div className="form-row">
      {(isFetching)?(<div>Fetching Data...</div>):(books.map(book => <div>{book.title}</div>))}
    </div>
  )
}