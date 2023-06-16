import "./styles.css"
import { Route, Routes } from "react-router-dom"
import App1 from "./App1/App1"
import App2 from "./App2/App2"
import App3 from "./App3/App3"
import AppHome from "./AppHome"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AppHome/>}/>
      <Route path="/ex1" element={<App1/>}/>
      <Route path="/ex2" element={<App2/>}/>
      <Route path="/ex3" element={<App3/>}/>
    </Routes>
    </>
  )
}