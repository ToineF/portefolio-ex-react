import "../styles.css"
import { useState } from "react"
import MenuButton from "../MenuButton"

export default function App3() {

  const [sentence, setSentence] = useState("")
  const [celsiusInput, setCelsiusInput] = useState("")
  const [fahrenheitInput, setfahrenheitInput] = useState("popo")

  function formSubmit(event) {
    event.preventDefault();
    console.log(typeof celsiusInput) // return undefined
    if (isNaN(celsiusInput)) return
    setSentence((celsiusInput > 100)?"C'est bouillant":"Ce n'est pas bouillant")
  }

  function changeCelsisus(e) {
     setCelsiusInput(() => {
       e.target.value // return string
     })
    // if (isNaN(celsiusInput)) return

    //setfahrenheitInput(() => celsiusInput)
    //"celsiusInput*1.8 + 32"
  }

  function changeFahrenheit(e) {
    setfahrenheitInput(() => {
      e.target.value
    })
  }

  return (
    <div className="form-row">
      <form onSubmit={formSubmit} className="new-item-form">
        <input type="text" value={celsiusInput} onChange={(e) => {
        setCelsiusInput(e.target.value)}}/>
        <button className="btn">Enter</button>
      </form>
      {/* <form onSubmit={formSubmit} className="new-item-form">
        <input type="text" value={fahrenheitInput} onChange={changeFahrenheit}/>
        <button className="btn">Enter</button>
      </form> */}
      <p>{sentence}</p>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}