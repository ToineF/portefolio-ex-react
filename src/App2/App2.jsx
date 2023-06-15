import "../styles.css"
import { useState } from "react"
import AddItemMenu from "./AddItemMenu"
import ToDoList from "./ToDoList"
import MenuButton from "../MenuButton"


export default function App2() {
  const [todos, setTodos] = useState([])

  return (
    <div className="form-row">
      <AddItemMenu todos={todos} setTodos={setTodos}/>
      <h1 className="header0">Todo List</h1>
      <ToDoList todos={todos}/>
      <MenuButton name="Menu" link ="../../index.html"/>
    </div>
  )
}