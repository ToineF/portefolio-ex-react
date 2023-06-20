import "./styles.css"
import { Route, Routes } from "react-router-dom"
import App1 from "./Apps/App1"
import App2 from "./Apps/App2"
import App3 from "./Apps/App3"
import App4 from "./Apps/App4"
import AppHome from "./Apps/AppHome"
import AppError from "./Apps/AppError"
import NavBar from "./Components/NavBar"

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<AppHome/>}/>
      <Route element={<NavBar/>}>
        <Route path="/ex1" element={<App1/>}/>
        <Route path="/ex2" element={<App2/>}/>
        <Route path="/ex3" element={<App3/>}/>
      </Route>
      <Route path="/ex4" element={<App4/>}/>
      <Route path="*" element={<AppError/>} />
    </Routes>
    </>
  )
}