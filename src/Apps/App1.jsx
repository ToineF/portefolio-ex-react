import "../styles.css"
import { useState } from "react"
import MenuButton from "../Components/MenuButton"

export default function App1() {
  const [number, setNumber] = useState(0)

  return (
    <div className="form-row">
      <div>
        <p>{number}</p>
        <button className="btn" onClick={()=>{
          setNumber((n)=>n-1)
        }}>-</button>
        <button className="btn" onClick={()=> {
          setNumber((n)=>n+1)
        }}>+</button>
      </div>
      {/* <MenuButton name="Menu" link ="/"/> */}
    </div>
  )
}