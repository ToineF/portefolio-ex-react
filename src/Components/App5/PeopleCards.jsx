export default function PeopleCard({people}) {
    return (
        <div className="border-4 rounded-md p-2">
            <div><p className="font-bold text-lg mb-2">{people.name}</p></div>
            {/* <div className="flex flex-columns gap-4 p-2">
              <div className="flex-50 grid">
                    <div>By {people.author}</div>
                    <div>{people.published}</div>
                    <div>Genre: {people.genre}</div>
                    <div>Publisher: {people.publisher}</div>
              </div>
              <div  className="flex-50">
                <img className="w-full" src={people.image}/>
              </div>
            </div>
            <div>"{people.description}"</div> */}
        </div>
    )
}