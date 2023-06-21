export default function PokemonCard({prop}) {
  function PascalCase(str) {
    const str1 = str.charAt(0).toUpperCase()
    const str2 = str.slice(1)
    return str1 + str2
  }


    return (
        <div className="border-4 border-red-100 rounded-md p-2 bg-red-600">
            <div className="flex justify-center gap-2 items-center pt-2  bg-red-500">
            <p className="font-bold text-lg mb-2 border-2 rounded-lg px-2">{prop.id}</p>
            <p className="font-bold text-lg mb-2">{PascalCase(prop.name)}</p></div>
            <div className="flex justify-center bg-gray-800 mx-1">
            <img src={prop.sprites.front_default}/>
            </div>
            <div className="bg-red-500 flex flex-col gap-2 p-2"><p>
              Type{(prop.types.length > 1)?("s"):("")}: {prop.types.map(type => {
              return (PascalCase(type.type.name) + " ")
            })}</p>
              <p>Height: {prop.height/10}m</p>
              <p>Weight: {prop.weight/10}kg</p></div>
        </div>
    )
}