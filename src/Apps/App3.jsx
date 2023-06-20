import "../styles.css"
import { useState } from "react"
import InputForm from "../Components/App3/InputForm"

export default function App3() {

  const [sentence, setSentence] = useState("")
  const [celsiusInput, setCelsiusInput] = useState("")
  const [fahrenheitInput, setfahrenheitInput] = useState("")

  
  function formSubmit(event) {
    event.preventDefault();
    if (isNaN(celsiusInput)) return
    setSentence((celsiusInput >= 100)?"C'est bouillant":"Ce n'est pas bouillant")
  }


  return (
    <>
      <InputForm inputText={"Temperature (Celsius)"} displayValue={celsiusInput} formSubmit={formSubmit} onValueChange={(e) => {
      setCelsiusInput(e.target.value)
      setfahrenheitInput((isNaN(e.target.value) || e.target.value === "")?(e.target.value):(e.target.value*1.8 + 32))}}/>
      <InputForm inputText={"Temperature (Fahrenheit)"} displayValue={fahrenheitInput} formSubmit={formSubmit} onValueChange={(e) => {
      setCelsiusInput((isNaN(e.target.value) || e.target.value === "")?(e.target.value):((e.target.value- 32)/1.8 ))
      setfahrenheitInput(e.target.value)}}/>
      <p>{sentence}</p>
    </>
  )
}