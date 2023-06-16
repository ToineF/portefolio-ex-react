import "../styles.css"
import { useState } from "react"
import MenuButton from "../MenuButton"

export default function App3() {

  const [sentence, setSentence] = useState("")
  const [celsiusInput, setCelsiusInput] = useState("")
  const [fahrenheitInput, setfahrenheitInput] = useState("")

  function formSubmit(event) {
    event.preventDefault();
    if (isNaN(celsiusInput)) return
    setSentence((celsiusInput > 100)?"C'est bouillant":"Ce n'est pas bouillant")
  }

  return (
    <div className="form-row">
      <form onSubmit={formSubmit} className="new-item-form">
        <p>Celsisus</p>
        <input type="text" value={celsiusInput} onChange={(e) => {
        setCelsiusInput(e.target.value)
        setfahrenheitInput((isNaN(e.target.value) || e.target.value === "")?(e.target.value):(e.target.value*1.8 + 32))}}/>
        <button className="btn">Enter</button>
      </form>
      <form onSubmit={formSubmit} className="new-item-form">
        <p>Fahrenheit</p>
        <input type="text" value={fahrenheitInput} onChange={(e) => {
        setCelsiusInput((isNaN(e.target.value) || e.target.value === "")?(e.target.value):((e.target.value- 32)/1.8 ))
        setfahrenheitInput(e.target.value)}}/>
        <button className="btn">Enter</button>
      </form>
      
      <p>{sentence}</p>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}