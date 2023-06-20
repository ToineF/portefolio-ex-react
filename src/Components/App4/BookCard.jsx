export default function BookCard({book}) {
    return (
        <div className="border-4 rounded-md p-2">
            <div><p className="font-bold text-lg mb-2">{book.title}</p></div>
            <div className="flex flex-columns gap-4 p-2">
              <div className="flex-50 grid">
                    <div>By {book.author}</div>
                    <div>{book.published}</div>
                    <div>Genre: {book.genre}</div>
                    <div>Publisher: {book.publisher}</div>
              </div>
              <div  className="flex-50">
                <img className="w-full" src={book.image}/>
              </div>
            </div>
            <div>"{book.description}"</div>
        </div>
    )
}