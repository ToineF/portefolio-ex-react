import "../styles.css"
import { useEffect, useState } from "react";

export default function App4() {
  const [books, setBooks] = useState([])
  const [isFetching, setIsFetching] = useState(true)

useEffect(() => {
    fetch("https://fakerapi.it/api/v1/books?_quantity=9")
        .then(res => res.json())
        .then(data => setBooks(data.data))
}, [])

  return (
    <div className="form-row">
      {books.map(book => <div>{book.title}</div>)}
    </div>
  )
}